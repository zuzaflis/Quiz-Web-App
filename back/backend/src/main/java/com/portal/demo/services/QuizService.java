package com.portal.demo.services;

import com.portal.demo.model.exam.Quiz;
import com.portal.demo.repository.QuizRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class QuizService {
    private final QuizRepository quizRepository;

    public Quiz addQuiz(Quiz quiz){
        return this.quizRepository.save(quiz);
    }
    public Quiz updateQuiz(Quiz quiz){
        return this.quizRepository.save(quiz);
    }
    public Set<Quiz> getQuizzes(){
        return new HashSet<>(this.quizRepository.findAll());
    }
    public Quiz getQuiz(Long quizId){
        return this.quizRepository.findById(quizId).get();
    }
    public void deleteQuiz(Long quizId){
       Quiz quizToDelete =  quizRepository.findById(quizId).get();
       quizRepository.delete(quizToDelete);
    }
}
