import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/_services/question.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit{
  qId: any;
  questions =[];

  constructor(
    private locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
  ) {}
  ngOnInit(): void {
    this.preventButtonBack();
    this.qId = this._route.snapshot.params['qid'];
    this.loadQuestions();
  }
  loadQuestions(){
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      this.questions = data;
      console.log(this.questions);

    },(error)=>{
      console.log(error);
    })
  }
  preventButtonBack(){
    history.pushState(null,'',location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null,'',location.href);
    })
  }

}
