import {Client} from "../services/client.service";
import {Device} from "../services/device.service";
import {Work} from "./work";
import {SparePart} from "./sparePart";
import {TestProcedure} from "./testProcedure";
import {TestSection} from "./testSection";

export class Report {

  public tools: string[];
  public client: Client;
  public device: Device;
  public work: Work[] = new Array<Work>();
  public spareParts: SparePart[] = new Array<SparePart>();
  public corrections = {
    id: "",
    serial: "",
    model: "",
    year: "",
    location: "",
    department: ""
  };
  public serviceKit: string;
  public comment: string;
  public state: string;
  public testProcedure: TestProcedure;
  public technician: string;
  public date: string;
  public _id: string;


  constructor(){}

  public addTool(tool: string){
    if(!this.tools) this.tools = new Array<string>();
    if(this.tools.length < 5) this.tools.push(tool);
  }

  public removeTool(index: number) {
    this.tools.splice(index, 1);
  }

  public addTechnician(){
    let user = JSON.parse(localStorage.getItem('user'));
    this.technician = user.name;
  }

  public addWork(work: Work){
    this.work.push(work);
  }

  public removeWork(index: number){
    this.work.splice(index, 1);
  }

  public addSparePart(sparePart: SparePart){
    if(!this.spareParts) this.spareParts = new Array<SparePart>();
    this.spareParts.push(sparePart);
  }

  public removeSparePart(index: number){
    this.spareParts.splice(index, 1);
  }

  addTestProcedure(testProcedure){
    this.testProcedure = new TestProcedure();
    this.testProcedure.model = testProcedure.model;
    this.testProcedure.version = testProcedure.version;
    for(let section of testProcedure.testSections){
      this.testProcedure.testSections.push(new TestSection(section));
    }
  }

  isValid(){
    if(!this.state) return false;
    if(this.work.length)
    return true;
  }

  createFromJson(json){
    if(json._id) this._id = json._id;
    if(json.tools) this.tools = json.tools;
    if(json.client) this.client = json.client;
    if(json.device) this.device = json.device;
    if(json.technician) this.technician = json.technician;
    if(json.state) this.state = json.state;
    if(json.date) this.date = json.date;
    if(json.serviceKit) this.serviceKit = json.serviceKit;
    if(json.comment) this.comment = json.comment;
    this.corrections = json.corrections;
    this.addTestProcedure(json.testProcedure);
    for(let work of json.work) this.addWork(work);
    for(let sparePart of json.spareParts) this.addSparePart(sparePart);
  }

}
