import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {User} from "./auth.service";


export interface Tool {
  _id?: String;
  userName: String;
  id: string;
  description: String;
}

@Injectable({
  providedIn: 'root'
})

export class ToolService {
  authToken: any;
  user: User;
  tools: Array<Tool>;

  constructor(private httpClient: HttpClient) {
  }

  getTools() {
    this.loadUser();
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });

    //debugging
    console.log('http://localhost:3000/tools/' + this.user.username);

    this.httpClient.get<any>('http://localhost:3000/tools/' + this.user.username, {headers: headers}).subscribe(
      tools => {
        this.tools = tools;
      },
      err => {
        console.log(err);
      });
  }

  addTool(tool: Tool){
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.httpClient.post<any>('http://localhost:3000/tools/add', tool, {headers: headers});
  }

  deleteTool(tool: Tool){
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.httpClient.delete('http://localhost:3000/tools/'+tool._id, {headers: headers});
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loadUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
