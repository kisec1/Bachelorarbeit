import { Component, OnInit } from '@angular/core';
import {StkService} from "../../../services/stk.service";
import {SparePart} from "../../../models/sparePart";
import {SparepartsEditDialogComponent} from "./spareparts-edit-dialog/spareparts-edit-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.css']
})
export class SparePartsComponent implements OnInit {

  articleNr: string;
  description: string;
  serial: string;
  supplier: string;
  amount: number;
  price: number;
  chargeable: boolean = false;
  stkService;
  activeTab = 0;
  year = new Date().getFullYear();

  serviceKits = [
    {viewValue: '', value: '-'},
    {viewValue: `(${this.year + 1})`, value: '1'},
    {viewValue: `(${this.year + 2})`, value: '2'},
    {viewValue: `(${this.year + 3})`, value: '3'},
    {viewValue: `(${this.year + 4})`, value: '4'},
    {viewValue: `(${this.year + 5})`, value: '5'},
    {viewValue: `(${this.year + 6})`, value: '6'},
    {viewValue: `(${this.year + 7})`, value: '7'},
    {viewValue: `(${this.year + 8})`, value: '8'},
    {viewValue: `(${this.year + 10})`, value: '10'},
    {viewValue: `(${this.year + 12})`, value: '12'}
  ];

  constructor(stkService: StkService, public dialog: MatDialog) {
    this.stkService = stkService;
  }

  onSubmitAdd(){
    let sparePart = new SparePart(
      this.articleNr,
      this.description,
      this.serial,
      this.supplier,
      this.amount,
      this.price,
      this.chargeable)
    this.stkService.selectedReport.addSparePart(sparePart);
    this.activeTab = 1;
    this.resetFields();
  }

  resetFields(){
    this.articleNr = '';
    this.description = '';
    this.serial = '';
    this.supplier = '';
    this.amount = 0;
    this.price = 0;
    this.chargeable = false;
  }

  removeSparePart(i){
    this.stkService.selectedReport.removeSparePart(i);
    if(i==0) this.activeTab = 0;
  }

  openDialog(i: number): void {
    const dialogRef = this.dialog.open(SparepartsEditDialogComponent, {
      data: {
        sparePart: this.stkService.selectedReport.spareParts[i],
        i: i,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  maxNumberOfSpareParts(){
    if(!this.stkService.selectedReport.spareParts || this.stkService.selectedReport.spareParts.length < 10) {
      return false;
    }
    else return true;
  }

  noSparePartsAdded(){
    if(!this.stkService.selectedReport.spareParts || this.stkService.selectedReport.spareParts.length == 0) {
      return true;
    }
    else return false;
  }

  ngOnInit() {
  }

}


