import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../_helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

public generateToken(loginData: any){

  return this.http.post(`${baseUrl}/api/v1/auth/authenticate`, loginData);
}
public loginUser(token: any){
  localStorage.setItem(`token`, token);
  return true;
}
public isLoggedIn(){
  let tokenStr = localStorage.getItem(`token`);
  if(tokenStr == undefined || tokenStr == `` || tokenStr == null){
    return false;
  } else {
    return true;
  }
}
// logout remove token from local storage
 public logout(){
  localStorage.removeItem(`token`);
  localStorage.removeItem(`user`);
  return true;
 }

public getToken(){
  return localStorage.getItem(`token`);
}
public setUser(user: any){
  localStorage.setItem(`user`, JSON.stringify(user));
}

public getUser(){
  let userStr = localStorage.getItem(`user`);
  if(userStr != null){
    return JSON.parse(userStr);
  } else{
    this.logout();
    return null;
  }
}
}
