import { Injectable } from '@angular/core';
import {Client} from "./client.service";
import {Device, DeviceService} from "./device.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TestProcedure} from "../models/testProcedure";

@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  devices: Array<Device> = new Array<Device>();
  selectedDevice: Device;
  selectedClient: Client;
  activeTab: number = 0;
  testProcedure: TestProcedure;

  constructor(private deviceService: DeviceService,
              private httpClient: HttpClient) {}

  selectClient(client: Client) {
    this.selectedClient = client;
    this.activeTab = 1;
    return this.deviceService.getDevices(client.id);
  }

  resetDevice(){
    this.selectedDevice = null;
  }

  selectDevice(device: Device){
    this.selectedDevice = device;
    this.activeTab = 2;
  }

  getTestProcedure(model) {
    console.log("GetTestProcedure: " + model);
    const token = localStorage.getItem("id_token");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.httpClient.get<TestProcedure>('http://localhost:3000/testprocedures/model/' + model, {headers: headers});
  }

  getUninishedReports() {
    const token = localStorage.getItem("id_token");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.httpClient.get<any>('http://localhost:3000/reports/unfinished', {headers: headers});
  }

  getReports() {
    console.log("GetNotFinishedReports: ");
    const token = localStorage.getItem("id_token");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.httpClient.get<any>('http://localhost:3000/reports/all', {headers: headers});
  }

}



