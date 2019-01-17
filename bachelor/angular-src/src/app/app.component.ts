import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {TranslateService} from "@ngx-translate/core";
import {StkService} from "./services/stk.service";

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService,
              private translate: TranslateService,
              private stkService: StkService){
    translate.setDefaultLang('de');
    translate.use('de');
  }

  isLoggedIn(){
    return this.authService.loggedIn();
  }

  ngOnInit(){
    this.stkService.updateLocalReports();
  }


}

