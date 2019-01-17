import { Component, OnInit } from '@angular/core';
import {SearchPageService} from "../../../services/search-page.service";
import {StkService} from "../../../services/stk.service";

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  id: String;
  serial: String;
  model: String;
  year: String;
  location: String;
  department: String;
  stkService: StkService;

  constructor(private searchPageService: SearchPageService,
              stkService: StkService) {
    this.stkService = stkService;
  }

  checkMaxYear(){
    return new Date().getFullYear();
  }

  ngOnInit() {}
}
