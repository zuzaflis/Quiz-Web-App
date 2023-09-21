import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http: HttpClient) { }

public getQuestionsOfQuiz(qid:any){
  return this._http.get(`http://localhost:8080/question/quiz/${qid}`);

}
}
