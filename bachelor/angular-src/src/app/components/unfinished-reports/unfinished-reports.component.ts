import {Component, OnInit} from '@angular/core';
import {SearchPageService} from "../../services/search-page.service";
import {Report} from "../../models/report";
import {StkService} from "../../services/stk.service";

export interface ReportInfo {
  _id: string,
  deviceId: string,
  deviceModel: string,
  clientName: string,
  technician: string,
  date: string
}


@Component({
  selector: 'app-unfinished-reports',
  templateUrl: './unfinished-reports.component.html',
  styleUrls: ['./unfinished-reports.component.css']
})
export class UnfinishedReportsComponent implements OnInit {

  searchPageService;
  unfinishedReports = new Array<ReportInfo>();
  reports = new Array<Report>();
  waiting: boolean = false;

  constructor(searchPageService: SearchPageService,
              private stkService: StkService) {
    this.searchPageService = searchPageService;
  }

  getDate(date: string) {
    let day = date.substring(6);
    let month = date.substring(4, 6);
    let year = date.substring(0, 4);
    return day + '.' + month + '.' + year;
  }

  loadReport(id: string) {
    this.waiting = true;
    this.stkService.loadUnfinishedReport(id).subscribe(
      (data) => {
        if(data){
          console.log(data);
          if (!this.stkService.openDrawer) this.stkService.openDrawer = true;
          let repo = new Report();
          repo.createFromJson(data);
          this.stkService.reports.push(repo);
          this.stkService.saveToLocalStorage();
          this.waiting = false;
        }
      }
    );
  }

  alreadyLoaded(report) {
    let result = false;
    for (let i of this.stkService.reports) {
      if (i._id){
        if(i._id == report._id) result = true;
      }
    }
    return result;
  }

  ngOnInit() {
    this.waiting = true;
    this.searchPageService.getUninishedReports().subscribe(
      data => {
        if (data) {
          for (let report of data) {
            let repo: ReportInfo = {
              _id: report._id,
              deviceId: report.device.id,
              deviceModel: report.device.model,
              clientName: report.client.name,
              technician: report.technician,
              date: report.date
            };

            this.unfinishedReports.push(repo);
          }
          this.waiting = false;
        } else {
          console.log("Couldn't load devices from server");
          this.waiting = false;
        }
      });
  }

}
