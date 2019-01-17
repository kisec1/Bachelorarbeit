import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material";

export interface Client {
  id: string;
  nr: number;
  name: string;
  street: string;
  houseNr: string;
  zip: number;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //client: any;
  clients: Array<Client> = new Array<Client>();
  public dataSource = new MatTableDataSource<Client>();

  constructor(private httpClient: HttpClient) {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getClients() {
    const token = localStorage.getItem("id_token");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    //return this.httpClient.get<any>('http://localhost:3000/clients/all', {headers: headers});
    return this.httpClient.get<any>('http://localhost:3000/clients/all', {headers: headers});
  }
}
