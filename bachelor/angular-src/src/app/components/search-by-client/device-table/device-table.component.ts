import {Component, OnInit, ViewChild} from '@angular/core';
import {Device, DeviceService} from "../../../services/device.service";
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from "@angular/material";
import {SearchPageService} from "../../../services/search-page.service";
import {Client} from "../../../services/client.service";

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.css']
})
export class DeviceTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('myTable') table: MatTable<any>;
  dataSource;
  waiting: boolean = false;
  devices: Array<Device> = new Array<Device>();
  public deviceService;

  /* Columns displayed in the table */
  displayedColumns = ['id', 'model', 'description', 'department', 'nextCheck'];

  constructor(deviceService: DeviceService,
              private searchPageService: SearchPageService) {
    this.deviceService = deviceService;
  }

  selectDevice(device: Device) {
    this.searchPageService.selectDevice(device);
  }

  getData() {
    console.log("updated");
    this.waiting = true;
    this.dataSource = new MatTableDataSource<Device>();
    for(let device of this.searchPageService.devices){
      this.dataSource.data.push(device);
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.waiting = false;
  }

  updateDeviceList(){
    this.waiting = true;
    this.deviceService.getDevices(this.searchPageService.selectedClient.id).subscribe(
      data => {
        if (data) {
          this.searchPageService.devices = data;
          this.getData();
        }
        else {
          console.log("Couldn't load clients from server");
        }
      });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
      this.getData();
  }
}
