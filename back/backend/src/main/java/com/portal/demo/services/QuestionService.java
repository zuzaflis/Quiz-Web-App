package com.portal.demo.services;

import com.portal.demo.model.exam.Question;
import com.portal.demo.model.exam.Quiz;
import com.portal.demo.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    public Question addQuestion(Question question){
    question.getQuesId();

        return this.questionRepository.save(question);
    }
    public Question updateQuestion (Question question){
        return this.questionRepository.save(question);
    }
    public Set<Question> getQuestions(){
        return new HashSet<>(this.questionRepository.findAll());
    }
    public Question getQuestion(Long queId){
        return this.questionRepository.getById(queId);
    }
    public Set<Question> getQuestionOfQuiz(Quiz quiz){
        return this.questionRepository.findByQuiz(quiz);
    }
    public void deleteQuestion(Long queId){
        Question questionToDelete = this.questionRepository.getById(queId);
        this.questionRepository.delete(questionToDelete);
    }
}
