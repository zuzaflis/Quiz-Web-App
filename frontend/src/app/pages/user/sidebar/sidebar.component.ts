import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { StorageService } from 'src/app/_services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;
  categories = [
    {
      cid:'',
      title: '',
      description:''
    },
  ]

  constructor(
    public storageService: StorageService,
    private _category: CategoryService,
    ) {}

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.categories=data;
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error", "Error with fetching data!", 'error');
    })
  }

  logout() : void {
    this.storageService.clean();
    window.location.reload();
  }
}
