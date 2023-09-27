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

public addQuestion(question: any){
  return this._http.post(`http://localhost:8080/question/`, question);
}

public deleteQuestion(questionId: any){
  return this._http.delete(`http://localhost:8080/question/${questionId}`)
}
public evalQuestions(dataToSend: any){
  return this._http.post(`http://localhost:8080/question/eval`, dataToSend);
}
}
