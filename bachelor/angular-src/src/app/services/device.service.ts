import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material";
import {SearchPageService} from "./search-page.service";

export interface Device {
  _id: string;
  id: string,
  model: string;
  serial: string;
  description_umds: string;
  description: string;
  brand: string;
  year: string;
  account: string;
  department: number;
  location: string;
  clientId: string;
  state: string;
  nextCheck: string;
  lastCheck: string;
  contract: string;
  contractNr: string;
  interval: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  //device: any;
  //devices: Array<Device> = new Array<Device>();
  //public dataSource;

  constructor(private httpClient: HttpClient) {}

  /*
  getDevices(clientId){
    console.log("DeviceService: " +clientId);
    const token = localStorage.getItem("id_token");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    this.httpClient.get<Array<Device>>('http://localhost:3000/devices/client/'+clientId, {headers: headers}).subscribe(
      data => {
        if(data){
          this.devices = data;
          this.dataSource = new MatTableDataSource(this.devices);
        }
        else {
          console.log("Couldn't load devices from server");
        }
      });
  }
  */

  getDevices(clientId) {
    console.log("DeviceService: " + clientId);
    //this.devices = new Array<Device>();
    //this.dataSource = new MatTableDataSource<Device>();
    const token = localStorage.getItem("id_token");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.httpClient.get<Array<Device>>('http://localhost:3000/devices/client/' + clientId, {headers: headers});
  }
}
