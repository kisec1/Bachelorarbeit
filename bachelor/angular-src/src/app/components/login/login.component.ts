import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ClientService} from "../../services/client.service";
import {DeviceService} from "../../services/device.service";
import {ToolService} from "../../services/tool.service";
import {StkService} from "../../services/stk.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: String;
  password: String;
  waiting: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private deviceService: DeviceService,
    private stkService: StkService,
    private toolService: ToolService) {
  }

  /*
  Sends user credentials to backend for verification and
  saves JWT and user data to local storage
   */
  onLoginSubmit() {
    this.waiting = true;
    const user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.stkService.updateLocalReports();
        this.toolService.getTools();
        this.clientService.getClients();
        this.deviceService.getDevices(0);
        this.waiting = false;
        this.router.navigate(['/profile'])
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000})
        this.router.navigate(['/login'])
        this.waiting = false;
      }
    });
  }
}
