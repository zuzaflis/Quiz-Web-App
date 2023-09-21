import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http : HttpClient) { }

  public getQuizzes(){
    return this._http.get(`http://localhost:8080/quiz/`)
  }


  public addQuiz(quiz: any){
   return this._http.post(`http://localhost:8080/quiz/`, quiz)
  }


  public deleteQuiz(qId:any){
  return this._http.delete(`http://localhost:8080/quiz/${qId}`) 
  }

  public getSingleQuiz(qId:any){
    return this._http.get(`http://localhost:8080/quiz/${qId}`)
  }

  public updateQuiz(quiz: any){
    return this._http.put(`http://localhost:8080/quiz/`, quiz)
  }
}
