import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/_services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{
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

    constructor(private _quizService: QuizService) { }

  ngOnInit(): void {
    this._quizService.getQuizzes().subscribe((data:any)=>{
      this.quizzes=data;
    },
    (error)=>{
    console.log(error);
    Swal.fire("Error", "Error with fetching data!", 'error');
     })
  }

  onDeleteQuiz(qId:any){

    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._quizService.deleteQuiz(qId).subscribe((data:any)=>{
          this.quizzes = this.quizzes.filter((quiz)=>quiz.qid !=qId);
          Swal.fire("Success","Quiz is deleted",'success');
        },(error)=>{
          console.log(error);
          Swal.fire("error",'',"error");
        })
      }
    })

  }
}
