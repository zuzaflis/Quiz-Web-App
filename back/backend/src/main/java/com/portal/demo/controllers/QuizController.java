package com.portal.demo.controllers;

import com.portal.demo.model.exam.Quiz;
import com.portal.demo.services.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/quiz")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", allowCredentials = "true")
public class QuizController {
    private final QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<Quiz> add(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    @PutMapping("/")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    @GetMapping("/")
    public ResponseEntity<?> getQuizzes(){
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }
    @GetMapping("/{Id}")
    public Quiz getQuiz(@PathVariable("Id") Long Id){
        return this.quizService.getQuiz(Id);
    }
    @DeleteMapping("/{Id}")
    public void deleteQuiz(@PathVariable("Id") Long Id){
        this.quizService.deleteQuiz(Id);
    }
}
