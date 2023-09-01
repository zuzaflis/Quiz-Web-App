import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/v1/auth/';


const userToRegister = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post(
      AUTH_API+ `authenticate`,
      {
        username,
        password
      }
    );
  }

  register(userToRegister: any) : Observable<any>{
    return this.http.post(
      AUTH_API+ `register`,
      userToRegister,
      httpOptions
    );
  }



}
