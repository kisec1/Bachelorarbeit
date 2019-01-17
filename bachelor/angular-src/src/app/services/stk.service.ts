import {Injectable} from '@angular/core';
import {Report} from "../models/report";
import {ClientService} from "./client.service";
import {DeviceService} from "./device.service";
import {SearchPageService} from "./search-page.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StkService {

  openDrawer: boolean = false;
  reports = Array<Report>();
  selectedReport: Report;

  constructor(private clientService: ClientService,
              private deviceService: DeviceService,
              private searchService: SearchPageService,
              private httpClient: HttpClient) {
  }

  selectReport(report: Report) {
    this.selectedReport = report;
  }

  createReport() {
    let user = JSON.parse(localStorage.getItem('user'));
    let repo = new Report();
    repo.device = this.searchService.selectedDevice;
    repo.client = this.searchService.selectedClient;
    repo.technician = user.name;
    //repo.testProcedure = new TestProcedure();
    this.searchService.getTestProcedure(this.searchService.selectedDevice.model).subscribe(
      data => {
        if (data) {
          repo.addTestProcedure(data);
          this.saveToLocalStorage();
        } else {
          console.log("Couldn't load devices from server");
        }
      });
    this.reports.push(repo);
    if (!this.openDrawer) this.openDrawer = true;
  }

  removeSelectedReport() {
    for (let i = 0; i < this.reports.length; i++) {
      if (this.reports[i] === this.selectedReport) {
        this.reports.splice(i, 1);
        this.selectedReport = null;
      }
    }
    this.saveToLocalStorage();
  }

  uploadReport() {
    let user = JSON.parse(localStorage.getItem('user'));
    let date: string = this.getDate();
    this.selectedReport.date = date;
    this.selectedReport.technician = user.name;
    console.log(JSON.stringify(this.selectedReport));
    const token = localStorage.getItem("id_token");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.httpClient.post<any>('http://localhost:3000/reports/', this.selectedReport, {headers: headers})
  };

  numberOfTools() {
    if (!this.selectedReport.tools) return 0;
    else return this.selectedReport.tools.length;
  }

  numberOfSpareParts() {
    if (!this.selectedReport.spareParts) return 0;
    else return this.selectedReport.spareParts.length;
  }

  numberOfWork() {
    if (!this.selectedReport.work) return 0;
    else return this.selectedReport.work.length;
  }

  loadUnfinishedReport(id: string) {
    const token = localStorage.getItem("id_token");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.httpClient.get<any>('http://localhost:3000/reports/id/' + id, {headers: headers});
  };

  getDate() {
    let today = new Date();
    let day: string = today.getDate().toString();
    let month: string = (today.getMonth() + 1).toString();
    let year: string = today.getFullYear().toString();
    if (today.getDate() < 10) {
      day = "0" + day;
    }
    if (today.getMonth() + 1 < 10) {
      month = "0" + month;
    }
    return year + month + day;
  }

  saveToLocalStorage() {
    let user = JSON.parse(localStorage.getItem('user'));
    let stringi = JSON.stringify(this.reports);
    localStorage.setItem('reports_' + user.username, stringi);
    this.updateLocalReports();
  }

  updateLocalReports() {
    if (localStorage.getItem('user')) {
      let user = JSON.parse(localStorage.getItem('user'));
      if (localStorage.getItem('reports_' + user.username)) {
        let reportsArrayJson = JSON.parse(localStorage.getItem('reports_' + user.username));
        let reportsArray: Array<Report> = new Array<Report>();
        for (let reportJson of reportsArrayJson) {
          let repo = new Report();
          repo.createFromJson(reportJson);
          console.log(reportJson);
          reportsArray.push(repo);
        }
        this.reports = reportsArray;
      }
    }
  }
}
