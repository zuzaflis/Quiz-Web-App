import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories = [
    {
      cid:1,
      title: "",
      description:""
    },
  ]
  constructor(private _category:CategoryService) {}

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.categories=data;
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error", "Error with fetching data!", 'error');
    })
  }

}
