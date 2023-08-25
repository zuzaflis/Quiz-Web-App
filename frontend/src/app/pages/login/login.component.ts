import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private snackBar: MatSnackBar) {}
public user = {
  username: '',
  password: ''
};

  formSubmit(){
    console.log(this.user);
      if(this.user.username == '' || this.user.username == null){
        this.snackBar.open("Username is required." , "",{
          duration: 3000
        })
        return;
      }
}}
