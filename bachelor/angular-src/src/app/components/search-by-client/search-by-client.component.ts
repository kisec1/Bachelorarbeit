import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchPageService} from "../../services/search-page.service";
import {Client} from "../../services/client.service";
import {StkService} from "../../services/stk.service";
import {DeviceTableComponent} from "./device-table/device-table.component";


@Component({
  selector: 'app-search-by-client',
  templateUrl: './search-by-client.component.html',
  styleUrls: ['./search-by-client.component.css']
})

export class SearchByClientComponent implements OnInit {

  @ViewChild('myTable') deviceTable: DeviceTableComponent;
  searchPageService: SearchPageService;

  constructor(searchPageService: SearchPageService,
              private stkService: StkService) {
    this.searchPageService = searchPageService;
  }

  getSelectedClient(): Client {
    return this.searchPageService.selectedClient;
  }

  createReport() {
    this.stkService.createReport();
  }

  alreadyLoaded() {
    let result = false;
    for (let i of this.stkService.reports) {
      if (this.searchPageService.selectedDevice) {
        if (i.device.id == this.searchPageService.selectedDevice.id) {
          if (i.client.id == this.searchPageService.selectedClient.id) result = true;
        }
      }
    }
    return result;
  }

  /*
  showDevices(){
    return this.searchPageService.showDevices;
  }
  */

  ngOnInit() {
  }
}
