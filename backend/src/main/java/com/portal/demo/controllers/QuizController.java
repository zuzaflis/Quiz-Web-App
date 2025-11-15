package com.portal.demo.controllers;

import com.portal.demo.dto.QuizRequest;
import com.portal.demo.model.exam.Quiz;
import com.portal.demo.services.QuizService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", allowCredentials = "true")
public class QuizController {
    private final QuizService quizService;
    @PostMapping("/")
    public ResponseEntity<Quiz> add(@RequestBody QuizRequest quizRequest){
        return ResponseEntity.ok(this.quizService.addQuiz(quizRequest));
    }

    @PutMapping("/")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }
    @GetMapping("/")
    public ResponseEntity<?> getQuizzes(){
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }

    @GetMapping("/category/{cid}" )
    public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid){return this.quizService.getQuizzesOfCategory(cid);}
    @GetMapping("/{Id}")
    public Quiz getQuiz(@PathVariable("Id") Long Id){
        return this.quizService.getQuiz(Id);
    }
    @DeleteMapping("/{Id}")
    public void deleteQuiz(@PathVariable("Id") Long Id){
        this.quizService.deleteQuiz(Id);
    }
}
