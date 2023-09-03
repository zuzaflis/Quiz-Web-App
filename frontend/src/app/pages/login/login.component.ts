import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string [] = [];
  
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private storageService: StorageService) {}

ngOnInit(): void {
  if(this.storageService.isLoggedIn()){
    this.isLoggedIn = true;
    this.roles = this.storageService.getUser().roles;
  }
}
onSubmit(): void{
  const { username, password } = this.form;

  this.authService.login(username, password).subscribe({
    next: (data: any) => {
      console.log("success")
 
      this.storageService.saveUser(data);
      console.log(data);
  
   
      this.authService.getCurrentUser().subscribe({
        next: (user: any) => {
          this.storageService.saveUser(user);
          console.log(user);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = user.roles;
          this.reloadPage();
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    },
    error: (err) => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  });
}

reloadPage(): void {
  window.location.reload();
}
}
