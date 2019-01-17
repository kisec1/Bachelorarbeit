import { Component, OnInit } from '@angular/core';
import {StkService} from "../../../services/stk.service";
import {TranslateService} from "@ngx-translate/core";
import {TestSection} from "../../../models/testSection";
import {TestProcedure} from "../../../models/testProcedure";
import {TestPoint} from "../../../models/testPoint";

@Component({
  selector: 'app-test-procedure',
  templateUrl: './test-procedure.component.html',
  styleUrls: ['./test-procedure.component.css']
})

export class TestProcedureComponent implements OnInit {

  stkService;
  translateService;
  testProcedure: TestProcedure;

  constructor(stkService: StkService,
              translateService: TranslateService) {
    this.stkService = stkService;
    this.translateService = translateService;
  }

  checkTestProcedure(){
    if(this.stkService.selectedReport.testProcedure){
      this.testProcedure = this.stkService.selectedReport.testProcedure;
      return true;
    }
    return false
  }

  checkSetPoint(testPoint: TestPoint){
    if(testPoint.dimension){
      if(testPoint.dimension == 'i.O.') return false
    }
    return true;
  }

  ngOnInit() {}

}
