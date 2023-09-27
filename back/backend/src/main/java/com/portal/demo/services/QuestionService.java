package com.portal.demo.services;

import com.portal.demo.dto.EvalRequest;
import com.portal.demo.dto.QuestionRequest;
import com.portal.demo.model.User;
import com.portal.demo.model.exam.Question;
import com.portal.demo.model.exam.Quiz;
import com.portal.demo.model.exam.Result;
import com.portal.demo.repository.QuestionRepository;
import com.portal.demo.repository.QuizRepository;
import com.portal.demo.repository.ResultRepository;
import com.portal.demo.repository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuizRepository quizRepository;
    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;
    private final ResultRepository resultRepository;
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
    @Transactional
    public void deleteQuestion(Long quesId){
        Question question = questionRepository.findById(quesId).orElse(null);
        if(question!=null) {
            this.questionRepository.delete(question);
        }
    }

    @Transactional
    public Map<String,Object> evaluateAnswers(EvalRequest evalRequest){
        List<Question> questions = evalRequest.getQuestions();
       String quizTitle = questions.get(0).getQuiz().getTitle();


        Integer points = 0;
        Integer correctAnswers = 0;
        Integer inCorrectAnswers = 0;
        Integer attempted = 0;

        for(Question q : questions){
            System.out.println(q.getGivenAnswer());
            if(q.getGivenAnswer() == null){
                continue;
            }else if(q.getAnswer().trim().equals(q.getGivenAnswer().trim())){
                correctAnswers++;
                points+=10;
            }else if(q.getGivenAnswer() !=null || !q.getGivenAnswer().trim().equals("")){
              attempted++;
              inCorrectAnswers++;
            } 
        }
        Long userId = evalRequest.getUserId();
        Optional<User> userOpt = userRepository.findById(userId);
       if(userOpt.isPresent()){
            User user = userOpt.get();

           Result result = Result.builder()
                   .correctAnswers(correctAnswers)
                   .incorrectAnswers(inCorrectAnswers)
                   .points(points)
                   .attempted(attempted)
                   .quizTitle(quizTitle)
                   .user(user)
                   .build();

           resultRepository.save(result);
       } else throw new EntityNotFoundException("User with this id not found!");

        Map<String,Object> map = Map.of("points",points,"correctAnswers",correctAnswers, "attempted",attempted);


        return map;
    }

}

