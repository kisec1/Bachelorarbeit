import {Component, OnInit} from '@angular/core';
import {AuthService, User} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Tool, ToolService} from "../../services/tool.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  tools: Array<Tool>;
  id: string;
  description: string;
  newTool: Tool;
  currentPW: string;
  newPW: string;
  confNewPW: string;
  waiting = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toolService: ToolService) {
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return JSON.parse(localStorage.getItem('user'));
  }

  onSubmitAddTool() {
    this.waiting = true;
    this.getUser();
    this.newTool = {
      userName: this.user.username,
      id: this.id,
      description: this.description
    }
    this.toolService.addTool(this.newTool).subscribe(
      data => {
        this.id = '';
        this.description = '';
        this.toolService.getTools();
        this.waiting = false;
      },
      err => {
        console.log(err);
        this.waiting = false;
      });
  }

  deleteTool(tool: Tool) {
    this.waiting = true;
    this.toolService.deleteTool(tool).subscribe(
      data => {
        this.toolService.getTools();
        this.waiting = false;
      },
      err => {
        console.log(err);
        this.waiting = false;
      });
  }

  /* Checks if already a tool exists with the same id */
  alreadyAdded() {
    let result = false;
    if (this.toolService.tools && (this.toolService.tools.length > 0))
      for (let tool of this.toolService.tools) {
        if (tool.id == this.id) result = true;
      }
    return result;
  }

  /* not implemented yet */
  onSubmitChangePW() {
    //
  }

  ngOnInit() {
    if (!this.toolService.tools) {
      this.toolService.getTools();
    }
    this.authService.getProfile().subscribe(
      profile => {
        this.user = profile;
      },
      err => {
        console.log(err);
      })
  }
}
