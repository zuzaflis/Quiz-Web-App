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
}
