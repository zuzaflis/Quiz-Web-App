import { Component} from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
    constructor(public storageService: StorageService) {}

    logout() : void {
      this.storageService.clean();
      window.location.reload();
    }

}
