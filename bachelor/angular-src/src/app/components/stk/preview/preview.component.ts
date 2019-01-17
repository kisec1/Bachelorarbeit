import { Component, OnInit } from '@angular/core';
import {StkService} from "../../../services/stk.service";
import {User} from "../../../services/auth.service";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  public stkService;
  public today = Date.now();
  user;

  public checkServiceKit(num: number){
    if(this.stkService.selectedReport.serviceKit == num){
      return '&#x25C9; ';
    }
    return '&#x25EF; ';
  }

  public checkChargeable(chargeable: boolean){
    if(chargeable) return '&#10003;';
    return null;
  }

  public checkState(param){
    if (this.stkService.selectedReport.state == param) return '&#x25C9;';
    else return '&#x25EF;';
  }

  public checkStatedPassed() {
    switch (this.stkService.selectedReport.state) {
      case 'passed': {
        return ' Ja &#x25C9; Nein &#x25EF;';
      }
      case 'outOfService': {
        return ' Ja &#x25EF; Nein &#x25C9;';
      }
      case 'repairNeeds': {
        return ' Ja &#x25EF; Nein &#x25C9;';
      }
      default: {
        return ' Ja &#x25EF; Nein &#x25EF;';
      }
    }
  }

  constructor(stkService: StkService) {
    this.stkService = stkService;
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
