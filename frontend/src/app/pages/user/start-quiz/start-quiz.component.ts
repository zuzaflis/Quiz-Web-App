import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/_services/question.service';
import { QuizService } from 'src/app/_services/quiz.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit{
  qId: any;
  questions =[
    {
      content: '',
     image: '',
     option1: '',
     option2: '',
     option3: '',
     option4: '',
     answer: '',
     quizId:''
     
   },
  ];
  points: number = 0;
  counter = 60;
  userAnswer: any;
  isQuizCompleted: boolean = false;
  numberOfQuestions: any;

  currentQue: number = 0;
  interval$: any;
  progress: string = '0';


  constructor(
    private locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _quiz: QuizService,
  ) {}


  ngOnInit(): void {
    this.preventButtonBack();
    this.qId = this._route.snapshot.params['qid'];
    this.loadQuestions();
    this.startCounter();
  }

  loadQuestions(){
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      this.questions = data;
      console.log(this.questions);
      this.numberOfQuestions = this.questions.length;

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

  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(()=>{
      this.counter--; 
      if(this.counter === 0){
       this.questions[this.currentQue++];
        this.counter = 60;
    }
  }); 
  setTimeout(()=> {
    this.interval$.unsubscribe();
  },600000) // usatwic czas zgodnie z iloscia pytan
    }

    stopCounter(){
      this.interval$.unsubscribe();
      this.counter = 0;
    }

    resetCounter(){
      this.stopCounter();
      this.counter=60;
      this.startCounter();
    }

    getProgressPercent(){
      this.progress = ((this.currentQue/this.numberOfQuestions)*100)
      .toFixed(0)
      .toString();

      return this.progress;
    }

    nextQuestion(){
      this.questions[this.currentQue++];
      this.resetCounter();
      this.getProgressPercent();
    }
  }

