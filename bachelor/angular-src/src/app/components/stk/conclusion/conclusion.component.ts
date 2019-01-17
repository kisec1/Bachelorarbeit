import { Component, OnInit } from '@angular/core';
import {StkService} from "../../../services/stk.service";

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {

  stkService;
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

  constructor(stkService: StkService) {
    this.stkService = stkService;
  }

  ngOnInit() {
  }

}
