import { Component } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    public storageService: StorageService,
     private authService: AuthService){}
  currentUser: any;

  profile(): void {
    this.currentUser = this.storageService.getUser();
  }
  logout(): void {
    this.storageService.clean();
    window.location.reload();
  }

}
