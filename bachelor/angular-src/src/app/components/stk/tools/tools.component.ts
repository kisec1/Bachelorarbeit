import { Component, OnInit } from '@angular/core';
import {ToolService} from "../../../services/tool.service";
import {StkService} from "../../../services/stk.service";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  toolId: string;
  stkService;
  toolService;

  constructor( toolService: ToolService,
   stkService: StkService) {
    this.stkService = stkService;
    this.toolService = toolService;
  }

  allowAdding() {
    let tools = this.stkService.selectedReport.tools;
    if(tools == null) return true;
    if(tools.length < 5) return true;
    return false;
  }

  addTool(toolId: string){
    if(toolId != null  && toolId !=""){
      if(!this.idAlreadyUsed(toolId)){
        this.stkService.selectedReport.addTool(toolId);
        this.toolId = "";
      }
      else{
        // Here should a alert be triggered (Already exist)
      }
    }
  }

  public removeTool(i: number){
    this.stkService.selectedReport.removeTool(i);
  }

  public idAlreadyUsed(id: string){
    let report = this.stkService.selectedReport;
    let result = false;
    if(report.tools != null){
      let tools = report.tools;
      for(let i=0; i < tools.length; i++) {
        if (tools[i].localeCompare(id) == 0) {
          result = true;
        }
      }
    }
    return result;
  }

  public checkTool(toolId: string){
    let tools = this.stkService.selectedReport.tools;
    if(tools != null){
      if(tools.length >= 5) return true;
      if(this.idAlreadyUsed(toolId)) return true;
    }
    return false;
  }

  removeToolById(id: string) {
    let report = this.stkService.selectedReport;
    if (report.tools != null) {
      let tools = report.tools;
      for (let i = 0; i < tools.length; i++) {
        if (tools[i].localeCompare(id) == 0) {
          this.removeTool(i);
          break;
        }
      }
    }
  }

  isEmpty(){
    if(!this.toolId || this.toolId == "") return true;
    return false;
  }

  maxNumberOfTools(){
    let result = false;
    if(this.stkService.selectedReport.tools)
      if(this.stkService.selectedReport.tools.length > 4) result = true;
    return result;
  }

  noToolsAdded(){
    let result = false;
    if(!this.stkService.selectedReport.tools || this.stkService.selectedReport.tools.length == 0) result = true;
    return result;
  }

  ngOnInit() {
    if (!this.toolService.tools) this.toolService.getTools();
  }

}
