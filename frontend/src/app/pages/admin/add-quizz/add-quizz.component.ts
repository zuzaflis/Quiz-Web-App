import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';


interface Category {
   
  cId: number;
  title:string;

}
@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.css']
})


export class AddQuizzComponent implements OnInit {


constructor(private _categoriesService: CategoryService) {}
    categories: Category[]=[];

  ngOnInit(): void {
    this._categoriesService.categories().subscribe((data:any)=>{
      this.categories=data;
    },
    (error)=>{
      console.log(error);

    })
  }

}
