import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/_services/auth.service';
import { LoginService } from 'src/app/_services/login.service';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';

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
  errorMessage = "";
  roles: string [] = [];
  
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private storageService: StorageService) {}

ngOnInit(): void {
  if(this.storageService.isLoggedIn()){
    this.isLoggedIn = true;
    this.roles = this.storageService.getUser().roles;
  }
}
onSubmit(): void{
  const{ username, password } = this.form;
  this.authService.login(username, password).subscribe({
    next: data => {
      this.storageService.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.reloadPage();
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  });
}

reloadPage(): void {
  window.location.reload();
}

//   formSubmit(){
//     console.log(this.user);
//       if(this.user.username == '' || this.user.username == null){
//         this.snackBar.open("Username is required." , "",{
//           duration: 3000
//         })
//         return;
//       }
//       this.login.generateToken(this.user).subscribe((data: any) =>{
//         console.log("success");
//         console.log(data);
//       },
//       (error) =>{
//         console.log("Error with token bbg");
//         console.log(error);
//       });
// }
}
