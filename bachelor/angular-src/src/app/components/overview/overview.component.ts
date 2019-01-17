import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from "@angular/material";
import {OverviewService} from "../../services/overview.service";

export interface DataTableItem {
  id: string;
  model: string;
  brand: string;
  serial: string;
  description: string;
  department: string;
  location: string;
  sla: string;
  nextCheck: string;
  lastCheck: string;
  state: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('myTable') table: MatTable<any>;

  model: boolean = true;
  description: boolean = true;
  brand: boolean = true;
  department: boolean = true;
  location: boolean = true;
  sla: boolean = true;
  nextChack: boolean = true;
  lastChack: boolean = true;
  serial: boolean = true;
  state: boolean = true;
  nextCheckDate: Date;
  waiting: boolean = false;

  data: Array<DataTableItem> = new Array<DataTableItem>();
  dataSource = new MatTableDataSource<DataTableItem>();

  displayedColumns = ['id', 'model', 'description',
    'brand', 'serial', 'department', 'location', 'sla', 'nextCheck', 'lastCheck', 'state'];


  setRow(name: string){
    for(let i = 0; i < this.displayedColumns.length; i++){
      if(this.displayedColumns[i] == name) {
        this.displayedColumns.splice(i, 1);
        return;
      }
    }
    this.displayedColumns.push(name);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getDevices() {
    this.waiting = true;
    this.dataSource = new MatTableDataSource<DataTableItem>();
    this.overviewService.getDevices('129').subscribe(
      data => {
        if(data){
          //this.devices = data;
          //this.dataSource = new MatTableDataSource(this.devices);
          for(let device of data){
            let item: DataTableItem = {
              id: device.id,
              model: device.model,
              description: device.description,
              brand: device.brand,
              serial: device.serial,
              department: device.department.toString(),
              location: device.location,
              sla: device.contract,
              nextCheck: device.nextCheck,
              lastCheck: device.lastCheck,
              state: device.state
            }
            this.dataSource.data.push(item);
          }
          this.table.renderRows();
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.waiting = false;
        }
        else {
          console.log("Couldn't load devices from server");
          this.waiting = false;
        }
      });
  }

  getClients(){
    this.overviewService.getClients().subscribe(
        data => {
          if(data){
            this.overviewService.clients = data.clients;
            //this.dataSource = new MatTableDataSource(this.clients);
          }
          else {
            console.log("Couldn't load clients from server");
          }
        });
  }

  constructor(private overviewService: OverviewService) {}

  ngOnInit() {}
}
