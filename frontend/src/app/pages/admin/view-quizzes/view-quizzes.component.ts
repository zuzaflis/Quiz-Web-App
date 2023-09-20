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
        qId: 2,
        title: 'tytul',
        description: 'opis',
        maxMarks: '20',
        numberOfQuestions: '22',
        active: '',
        category:
        {
          title:'test'
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

}
