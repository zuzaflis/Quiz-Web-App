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
     quizId:'',
     givenAnswer:''
     
   },
  ];
  quiz ={
    title:'',
  }
  points: number = 0;
  totalPoints: number = 0;
  totalTime:number = 0;
  counter = 60;
  userAnswer: any;
  isQuizCompleted: boolean = false;
  numberOfQuestions: any;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;

  currentQue: any = 0;
  interval$: any;
  progress: string = '0';


  constructor(
    private locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _quiz: QuizService,
  ) {}


  ngOnInit(): void {
    //this.preventButtonBack();
    this.qId = this._route.snapshot.params['qid'];
    this.loadQuestions();
    this.loadQuiz();


    }

    sendToEvaluate(){
      this._question.evalQuestions(this.questions).subscribe((data:any)=>{
        console.log("send");
      })
    }
  loadQuestions(){
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      this.questions = data;

      this.numberOfQuestions = this.questions.length;
      this.totalPoints = this.numberOfQuestions*10;
      this.totalTime = this.numberOfQuestions*60000;
  
      this.startCounter();

    },(error)=>{
      console.log(error);
    })
  }

  loadQuiz(){
    this._quiz.getSingleQuiz(this.qId).subscribe((data:any)=>{
      this.quiz = data;
    })

  }
  answer(currentQno:number,option:any ){

    if(currentQno== this.numberOfQuestions){
      this.isQuizCompleted = true;
      this.stopCounter();
      console.log(this.questions);
      this.sendToEvaluate();
    }

    if(option == this.questions[currentQno].answer){
      this.points +=10;
      this.correctAnswer++;
      this.questions[currentQno].givenAnswer = option;
      setTimeout(()=>{
        this.questions[this.currentQue++];
        this.resetCounter();
        this.getProgressPercent();
      },1000);
    }else{
      setTimeout(()=> {
        this.questions[currentQno].givenAnswer = option;
        this.incorrectAnswer++;
        this.questions[this.currentQue++];
        this.resetCounter();
        this.getProgressPercent();
      },1000);
    }
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
        this.getProgressPercent();
    }
  }); 
  setTimeout(()=> {
    this.interval$.unsubscribe();
    this.isQuizCompleted=true;
    this.stopCounter();
  },this.totalTime)
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
      if(this.currentQue!=this.numberOfQuestions){
        this.questions[this.currentQue].givenAnswer="";
      this.questions[this.currentQue++];
      this.resetCounter();
      this.getProgressPercent();
      }
    }
  }

