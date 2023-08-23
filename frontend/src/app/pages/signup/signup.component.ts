import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    constructor(private userService: UserService) {}

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
        alert('username is required');
        return;
      }
    
      this.userService.addUser(this.user).subscribe(
        (data) => {
          //success
          console.log(data);
          alert("success");
        },
        (error) =>{
          console.log(error)
          alert("someth is wrong")
        }
      )
  }

}
