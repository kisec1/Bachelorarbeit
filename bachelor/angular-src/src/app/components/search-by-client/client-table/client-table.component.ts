import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Client, ClientService} from "../../../services/client.service";
import {SearchPageService} from "../../../services/search-page.service";
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from "@angular/material";
import {DataTableItem} from "../../overview/overview.component";
import {Device} from "../../../services/device.service";

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('myTable') table: MatTable<any>;
  @Output() updateEvent = new EventEmitter();

  dataSource = new MatTableDataSource<Client>();
  waiting: boolean = false;
  clients: Array<Client>;
  public clientService;

  /* Columns displayed in the table */
  displayedColumns = ['id', 'name', 'street', 'zip', 'city'];

  constructor(clientService: ClientService,
              private searchPageService: SearchPageService) {
    this.clientService = clientService
  }

  selectClient(client: Client) {
    this.searchPageService.resetDevice();
    this.searchPageService.devices = new Array<Device>();
    this.searchPageService.selectClient(client).subscribe(
      data => {
        if (data) {
          this.searchPageService.devices = data;
          this.updateEvent.emit(null);
        } else {
          console.log("Couldn't load clients from server");
        }
      });
  }


  updateClientList() {
    this.waiting = true;
    this.clientService.clients = new Array<Client>();
    this.dataSource = new MatTableDataSource<Client>();
    this.clientService.getClients().subscribe(
      data => {
        if (data) {
          for (let item of data.clients) {
            let client: Client = {
              id: item.id,
              nr: item.nr,
              name: item.name,
              street: item.street,
              houseNr: item.houseNr,
              zip: item.zip,
              city: item.city,
            }
            this.dataSource.data.push(client);
            this.clientService.clients.push(client);
          }
          this.table.renderRows();
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.waiting = false;
        } else {
          console.log("Couldn't load clients from server");
          this.waiting = false;
        }
      });
  }


  updateClientListFromService() {
    this.dataSource = new MatTableDataSource<Client>();
    for (let client of this.clientService.clients) {
      this.dataSource.data.push(client);
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.waiting = false;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.waiting = true;
    if (this.clientService.clients.length == 0) {
      this.updateClientList();
    } else {
      this.updateClientListFromService();
    }
  }
}
