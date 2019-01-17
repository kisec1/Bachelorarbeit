import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material";
import {Client} from "./client.service";
import {Device} from "./device.service";

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  clients: Array<Client>;


  constructor(private httpClient: HttpClient) {
  }

  getClients() {
    if (!this.clients) {
      const token = localStorage.getItem("id_token");
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      });
      return this.httpClient.get<any>('http://localhost:3000/clients/all', {headers: headers});
    }
  }

  getDevices(clientId: string) {
    const token = localStorage.getItem("id_token");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.httpClient.get<Array<Device>>('http://localhost:3000/devices/client/' + clientId, {headers: headers});
  }
}
