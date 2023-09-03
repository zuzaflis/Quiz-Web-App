import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';


const USER_KEY ="auth-user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem("token");
    window.sessionStorage.clear();
  }

  public saveToken(token: any){
    window.sessionStorage.removeItem("token");
    window.sessionStorage.setItem("token", token);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

public getToken(): any{
  const token = window.sessionStorage.getItem("token");
  if(token){
    return token;
  }
  return{};
}

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
   

    if(user){
      const parsedUser = JSON.parse(user);
      console.log('Token', parsedUser.token);
      
      const tokenInfo = jwt_decode(parsedUser.token);
      console.log(tokenInfo);
      return parsedUser;
      
    }

    return {};
  }


  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);

    if(user){
      return true;
    }

    return false;
  }
}
