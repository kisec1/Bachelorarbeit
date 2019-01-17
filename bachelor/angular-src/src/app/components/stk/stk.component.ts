import {Component, OnInit} from '@angular/core';
import {StkService} from "../../services/stk.service";
import {PreviewReportDialogComponent} from "./preview/preview-report-dialog/preview-report-dialog.component";
import {MatDialog} from "@angular/material";
import {FlashMessagesService} from "angular2-flash-messages";
import {TranslateService} from "@ngx-translate/core";
import {Report} from "../../models/report";

@Component({
  selector: 'app-stk',
  templateUrl: './stk.component.html',
  styleUrls: ['./stk.component.css']
})
export class StkComponent implements OnInit {

  stkService;
  successDe = 'Protokoll wurde erfolgreich hochgeladen';
  successEn = 'Report has been successfully uploaded';
  errorDe = 'Fehler beim Hochladen des Protokolls!';
  errorEn = 'Error while uploading report!';


  constructor(stkService: StkService,
              public dialog: MatDialog,
              private flashMessage: FlashMessagesService,
              private translate: TranslateService) {
    this.stkService = stkService;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PreviewReportDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getSuccessMessage() {
    if (this.translate.currentLang == 'de') return this.successDe;
    else return this.successEn;
  }

  getErrorMessage() {
    if (this.translate.currentLang == 'de') return this.errorDe;
    else return this.errorEn;
  }


  uploadReport() {
    this.stkService.uploadReport().subscribe(
      data => {
        this.flashMessage.show(this.getSuccessMessage(),
          {cssClass: 'alert-success', timeout: 3000});
        this.stkService.removeSelectedReport();
      },
      err => {
        this.flashMessage.show(this.getErrorMessage(),
          {cssClass: 'alert-danger', timeout: 3000});
        return false;
      });
  }

  removeSelectedReport() {
    this.stkService.removeSelectedReport();
  }

  saveReport() {
    this.stkService.saveToLocalStorage();
  }




  ngOnInit() {
  }

}
