import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/_services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-instruction',
  templateUrl: './quiz-instruction.component.html',
  styleUrls: ['./quiz-instruction.component.css']
})
export class QuizInstructionComponent implements OnInit{
qId: any;
quiz = {
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
  }


  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    
    this._quiz.getSingleQuiz(this.qId).subscribe((data:any)=>{
      this.quiz = data;
    },
    (error)=>{
      Swal.fire("Error", "Error while fetching data for this quiz!", 'error');
    })

  }
  startQuiz(){
    Swal.fire({
      title: 'Do you want to start?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/start/'+this.qId);
      } else if (result.isDenied) {
        this.router.navigateByUrl("/")
      }
    })
    
  }

}
