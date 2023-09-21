import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/_services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit{
qId:any;
qTitle: any;
questions = [];

  constructor(
    private _route: ActivatedRoute,
    private _queService: QuestionService,
  ) {}

  ngOnInit(): void {
   this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];


    this._queService.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      this.questions = data;
    },(error)=>{
      console.log(error);
    })
  }

}
