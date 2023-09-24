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
  role ='';
  
  constructor(
    private authService: AuthService, 
    private snackBar: MatSnackBar,
     private storageService: StorageService
     ) {}

ngOnInit(): void {
  if(this.storageService.isLoggedIn()){
    this.isLoggedIn = true;
    this.role = this.storageService.getUser().role;
  }
}
onSubmit(): void{
  const { username, password } = this.form;

  this.authService.login(username, password).subscribe({
    next: (data: any) => {
 
      this.storageService.saveUser(data);
    
      this.authService.getCurrentUser(data.token).subscribe({
        next: (user: any) => {
          this.storageService.saveUser(user);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.role = user.role;

          if(this.role == 'ADMIN'){
              window.location.href = '/admin'
          }else if(this.role == 'USER'){
            window.location.href = '/user-board/0'
          }
          //this.reloadPage();
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
