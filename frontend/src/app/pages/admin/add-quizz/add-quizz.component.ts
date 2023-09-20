import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { QuizService } from 'src/app/_services/quiz.service';
import Swal from 'sweetalert2';


interface Category {  
  cid: number;
  title:string;
}

@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.css']
})


export class AddQuizzComponent implements OnInit {


constructor(private _categoriesService: CategoryService, private _quizService: QuizService) {}
    categories: Category[]=[];

    quizData={
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active: true,
      categoryId:''
    }


  ngOnInit(): void {
    this._categoriesService.categories().subscribe((data:any)=>{
      this.categories=data;
    },
    (error)=>{
      console.log(error);
    })
  }


  formSubmit(){
    this._quizService.addQuiz(this.quizData).subscribe((data:any)=>{
      Swal.fire("Success!","Quiz is added!","success");
    },(error:any)=>{
      console.log(error);
      Swal.fire("Error!", "Something went wrong","error");
    })
  }
}
