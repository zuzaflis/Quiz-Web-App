import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private storageService: StorageService) { }

   ngOnInit(): void {
     this.currentUser = this.storageService.getUser();
  }
  
  isLoggedIn() : boolean { 
    return this.storageService.isLoggedIn();
  }

  getUsername() : string {
    return this.storageService.getUser().username();
  }
  logout(): void {
    this.storageService.clean();
    window.location.reload();
  }


}
