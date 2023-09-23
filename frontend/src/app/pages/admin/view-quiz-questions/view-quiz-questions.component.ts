import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/_services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit{
qId:any;
qTitle: any;
questions = [
  {
    quesId: '',
    content: '',
    image: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    quiz: {}
  }
];

  constructor(
    private _route: ActivatedRoute,
    private _queService: QuestionService,
  ) {}

  ngOnInit(): void {
   this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];


    this._queService.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      this.questions = data;
      console.log(this.questions)
    },(error)=>{
      console.log(error);
    })
  }

  onDeleteQuestion(quesId:any){

    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._queService.deleteQuestion(quesId).subscribe((data:any)=>{
          this.questions = this.questions.filter((q)=>q.quesId !=quesId);
          Swal.fire("Success","Question is deleted",'success');
        },(error)=>{
          console.log(error);
          Swal.fire("error",'',"error");
        })
      }
    })

  }

}
