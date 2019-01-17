import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {StkService} from "../../../../services/stk.service";
import {SparePart} from "../../../../models/sparePart";

@Component({
  selector: 'app-spareparts-edit-dialog',
  templateUrl: './spareparts-edit-dialog.component.html',
  styleUrls: ['./spareparts-edit-dialog.component.css']
})
export class SparepartsEditDialogComponent implements OnInit {

  stkService;
  public sparePart: SparePart = new SparePart(
    this.data.sparePart.articleNr,
    this.data.sparePart.description,
    this.data.sparePart.serial,
    this.data.sparePart.supplier,
    this.data.sparePart.amount,
    this.data.sparePart.price,
    this.data.sparePart.chargeable
  );

  indexOfSparePart: number = this.data.i;

  constructor( stkService: StkService ,
               public dialogRef: MatDialogRef<SparepartsEditDialogComponent>,
               @Inject(MAT_DIALOG_DATA)
               public data: any) {
    this.stkService = stkService;
  }

  ngOnInit() {
  }

  onSubmit(){
    this.stkService.selectedReport.spareParts.splice(this.indexOfSparePart,1, this.sparePart);
    this.dialogRef.close();
  }

}
