import { Component, OnInit } from '@angular/core';
import {User} from "../../../services/auth.service";
import {Work} from "../../../models/work";
import {StkService} from "../../../services/stk.service";
import {MatDialog} from "@angular/material";
import {WorkEditDialogComponent} from "./work-edit-dialog/work-edit-dialog.component";


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user'));
  activeTab: number = 0;
  service: string = "STK";
  date = new Date();
  technician: string = this.user.username.toUpperCase();
  workload: number = 0;
  travelTime: number = 0;
  chargeable: boolean = false;
  stkService;

  dateFilter = (d : Date): boolean => {
    let date = new Date();
    return date > d;
  }

  constructor(stkService: StkService,
              public dialog: MatDialog) {
    this.stkService = stkService;
  }

  onSubmitAdd(){
    let work = new Work(this.service,this.date, this.technician.toLocaleUpperCase(), this.workload, this.travelTime, this.chargeable);
    this.stkService.selectedReport.addWork(work);
    this.activeTab = 1;
    this.resetFields();
  }

  resetFields(){
    this.service = "STK";
    this.date = new Date();
    this.technician = this.user.username.toUpperCase();
    this.workload = 0;
    this.travelTime = 0;
    this.chargeable = false;
  }

  removeWork(i){
    this.stkService.selectedReport.removeWork(i);
  }

  openDialog(i: number): void {
    const dialogRef = this.dialog.open(WorkEditDialogComponent, {
      data: {
        work: this.stkService.selectedReport.work[i],
        i: i,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  maxNumberOfWork(){
    if(!this.stkService.selectedReport.work || this.stkService.selectedReport.work.length < 5) {
      return false;
    }
    else return true;
  }

  noWorkAdded(){
    if(!this.stkService.selectedReport.work || this.stkService.selectedReport.work.length == 0) {
      return true;
    }
    else return false;
  }

  ngOnInit() {}

}
