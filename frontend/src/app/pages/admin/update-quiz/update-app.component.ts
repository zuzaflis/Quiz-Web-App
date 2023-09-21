import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { QuizService } from 'src/app/_services/quiz.service';
import Swal from 'sweetalert2';


interface Category {  
  cid: number;
  title:string;
}

@Component({
  selector: 'app-update-app',
  templateUrl: './update-app.component.html',
  styleUrls: ['./update-app.component.css']
})
export class UpdateAppComponent implements OnInit{
  constructor(
    private _route: ActivatedRoute,
     private _quizService: QuizService,
     private _catService: CategoryService,
     private _router: Router
     ) {}

  qId = {};
  quiz: any;
  categories: Category[]=[];

  ngOnInit(): void {
  this.qId =  this._route.snapshot.params['qid'];

  this._quizService.getSingleQuiz(this.qId).subscribe((data:any)=>{
    this.quiz = data;
    console.log(this.quiz);
  },
  (error)=>{
    console.log(error);
  })

  this._catService.categories().subscribe((data:any)=>{
    this.categories = data;
  }, (error)=>{
    console.log(error);
    alert("error in loading")
    })

  }

  public onUpdate(){
    this._quizService.updateQuiz(this.quiz).subscribe((data:any)=>{
      Swal.fire("Success!","Quiz is added!","success").then((e)=>{
        this._router.navigate(['/admin/quizzes']);
      });
    },(error)=>{
      Swal.fire("Error!", "Something went wrong","error");
    })

  }
}
