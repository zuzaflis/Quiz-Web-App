import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../_helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  //adding user
  public addUser(user: any){
    return this.http.post(`${baseUrl}/api/v1/auth/register`, user);
  }

}
