import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/_services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  qId:any;
  qTitle: any;
  question = 
    {
       content: '',
      image: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: '',
      quizId:''
      
    }
  ;
  constructor(
    private _route: ActivatedRoute,
    private _questionService: QuestionService,
    private _router: Router
    ) {}

  ngOnInit(): void {

   this.qId = this._route.snapshot.params['qid'];
   this.qTitle = this._route.snapshot.params['title'];
   this.question.quizId = this.qId;
   
  }

  onAddQuestion(){
    this._questionService.addQuestion(this.question).subscribe((data:any)=>{
      Swal.fire("Success!","Question is added!","success").then((e)=>{
        this._router.navigate(['/admin/view-questions/']);
      });
    },(error)=>{
      console.log(error);
      Swal.fire("Error!", "Something went wrong","error");
    })

  }
}
