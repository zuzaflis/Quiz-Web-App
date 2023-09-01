import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public user = {
    username: '',
    password: ''
  };
  
  constructor(private userService: UserService, private snackBar: MatSnackBar, private login: LoginService) {}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

  formSubmit(){
    console.log(this.user);
      if(this.user.username == '' || this.user.username == null){
        this.snackBar.open("Username is required." , "",{
          duration: 3000
        })
        return;
      }
      this.login.generateToken(this.user).subscribe((data: any) =>{
        console.log("success");
        console.log(data);
      },
      (error) =>{
        console.log("Error with token bbg");
        console.log(error);
      });
}}
