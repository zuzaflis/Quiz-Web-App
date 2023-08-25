import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    constructor(private userService: UserService, private snackBar: MatSnackBar) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  formSubmit(){
    console.log(this.user);
      if(this.user.username == '' || this.user.username == null){
        this.snackBar.open("Username is required." , "",{
          duration: 3000
        })
        return;
      }
    
      this.userService.addUser(this.user).subscribe(
        (data) => {
          //success
          Swal.fire("Good job!", "You are registered!", "success");
        },
        (error) =>{
          console.log(error)
          this.snackBar.open("Something went wrong." , "",{
            duration: 3000
          })
        }
      )
  }

}
