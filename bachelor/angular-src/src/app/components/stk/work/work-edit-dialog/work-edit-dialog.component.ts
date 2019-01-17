import {Component, Inject, OnInit} from '@angular/core';
import {StkService} from "../../../../services/stk.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Work} from "../../../../models/work";

@Component({
  selector: 'app-work-edit-dialog',
  templateUrl: './work-edit-dialog.component.html',
  styleUrls: ['./work-edit-dialog.component.css']
})
export class WorkEditDialogComponent implements OnInit {

  stkService;
  public work: Work = new Work(
    this.data.work.service,
    this.data.work.date,
    this.data.work.technician,
    this.data.work.workload,
    this.data.work.travelTime,
    this.data.work.chargeable
  );
  indexOfWork: number = this.data.i;

  dateFilter = (d : Date): boolean => {
    let date = new Date();
    return date > d;
  }

  constructor(stkService: StkService, public dialogRef: MatDialogRef<WorkEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.stkService = stkService;
  }

  ngOnInit() {
  }

  onSubmit(){
    this.work.technician = this.work.technician.toUpperCase();
    this.stkService.selectedReport.work.splice(this.indexOfWork,1, this.work);
    this.dialogRef.close();
  }

}
