package com.portal.demo.services;

import com.portal.demo.dto.QuestionRequest;
import com.portal.demo.model.exam.Question;
import com.portal.demo.model.exam.Quiz;
import com.portal.demo.repository.QuestionRepository;
import com.portal.demo.repository.QuizRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuizRepository quizRepository;
    private final QuestionRepository questionRepository;
    @PersistenceContext
    private EntityManager entityManager;
    @Transactional
    public Question addQuestion(QuestionRequest questionRequest){
        Long quizId =questionRequest.getQuizId();
        Optional<Quiz> optionalQuiz = this.quizRepository.findById(quizId);

        if(optionalQuiz.isPresent()){
            Quiz quiz = optionalQuiz.get();
            quiz = entityManager.merge(quiz);
            Question question = Question.builder()
                    .content(questionRequest.getContent())
                    .image(questionRequest.getImage())
                    .option1(questionRequest.getOption1())
                    .option2(questionRequest.getOption2())
                    .option3(questionRequest.getOption3())
                    .option4(questionRequest.getOption4())
                    .answer(questionRequest.getAnswer())
                    .quiz(quiz)
                    .build();

            return this.questionRepository.save(question);
        }
        else throw new EntityNotFoundException("Quiz not found");
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
