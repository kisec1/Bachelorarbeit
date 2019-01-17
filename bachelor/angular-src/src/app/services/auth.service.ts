import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {tokenNotExpired} from "angular2-jwt";
import {StkService} from "./stk.service";
import {Report} from "../models/report";


export interface User {
  username: String;
  id: String;
  email: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;


  constructor(private httpClient: HttpClient,
              private stkService: StkService) {
  }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post<any>('http://localhost:3000/users/register', user, {headers: headers});
  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post<any>('http://localhost:3000/users/authenticate', user, {headers: headers});
  }

  getProfile(){
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.httpClient.get<any>('http://localhost:3000/users/profile', {headers: headers});
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    this.stkService.reports = new Array<Report>();
  }

  loggedIn(): boolean{
    this.loadToken();
    return tokenNotExpired(null, this.authToken);
  }
}
