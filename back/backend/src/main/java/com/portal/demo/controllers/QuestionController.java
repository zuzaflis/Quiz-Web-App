package com.portal.demo.controllers;

import com.portal.demo.dto.QuestionRequest;
import com.portal.demo.model.exam.Question;
import com.portal.demo.model.exam.Quiz;
import com.portal.demo.services.QuestionService;
import com.portal.demo.services.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/question")
@RequiredArgsConstructor
@CrossOrigin
public class QuestionController {
    private final QuestionService questionService;
    private final QuizService quizService;

    //add
    @PostMapping("/")
    public ResponseEntity<Question> add(@RequestBody QuestionRequest questionRequest){
        return ResponseEntity.ok(this.questionService.addQuestion(questionRequest));
    }
//update
    @PutMapping("/")
    public ResponseEntity<Question> update(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.updateQuestion(question));
    }
//get all questions
    @GetMapping("/")
    public ResponseEntity<?> getQuestions(){
        return ResponseEntity.ok(this.questionService.getQuestions());
    }

    //get questions from quiz
    @GetMapping("/quiz/{Id}")
    public ResponseEntity<?> getQuestionsFromQuiz(@PathVariable("Id") Long id){
        Quiz quiz = this.quizService.getQuiz(id);
        Set<Question> questions = quiz.getQuestions();
        List list = new ArrayList<>(questions);
        if(list.size() > Integer.parseInt(quiz.getNumberOfQuestions())){
            list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestions()+ 1));
        }
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

    //get single question by id
    @GetMapping("/{Id}")
    public Question getQuestion(@PathVariable("Id") Long id){
        return this.questionService.getQuestion(id);
    }

    //delete questions by id
    @DeleteMapping("/{Id}")
    public void deleteQuestion(@PathVariable("Id") Long id){
        this.questionService.deleteQuestion(id);
    }
}
