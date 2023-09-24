import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/_services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-quizzes',
  templateUrl: './all-quizzes.component.html',
  styleUrls: ['./all-quizzes.component.css']
})
export class AllQuizzesComponent implements OnInit{
  catId: any;
  quizzes = [
    {
      qid: '',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: '',
      category:
      {
        title:''
      }
    },
  ]

  constructor(
    private _route: ActivatedRoute,
    private _quizService: QuizService
  ) {}

  ngOnInit(): void {


    this._route.params.subscribe((params:any)=>{
      this.catId = this._route.snapshot.params['catId'];
      if(this.catId == 0){
        //get all
      this._quizService.getQuizzes().subscribe((data:any)=>{
        this.quizzes = data;
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error", "Error while fetching data!", 'error');
      })
    }else {
      //get from chosen category
      this._quizService.getQuizzesOfCategory(this.catId).subscribe((data:any)=>{
        this.quizzes=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error", "Error while fetching data of this category!", 'error');
      })
    
    }
    })
} 
}
