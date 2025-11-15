package com.portal.demo.services;

import com.portal.demo.dto.QuizRequest;
import com.portal.demo.model.exam.Category;
import com.portal.demo.model.exam.Quiz;
import com.portal.demo.repository.CategoryRepository;
import com.portal.demo.repository.QuizRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class QuizService {
    private final QuizRepository quizRepository;
    private final CategoryRepository categoryRepository;
    @PersistenceContext
    private EntityManager entityManager;
    @Transactional
    public Quiz addQuiz(QuizRequest quizRequest) {
        Long catId = Long.valueOf(quizRequest.getCategoryId());
        Optional<Category> optionalCat = this.categoryRepository.findById(catId);

        if (optionalCat.isPresent()) {
            Category cat = optionalCat.get();
            Quiz quiz = new Quiz();
            cat = entityManager.merge(cat);

            quiz.setCategory(cat);
            quiz.setTitle(quizRequest.getTitle());
            quiz.setDescription(quizRequest.getDescription());
            quiz.setMaxMarks(quizRequest.getMaxMarks());
            quiz.setNumberOfQuestions(quizRequest.getNumberOfQuestions());

            return this.quizRepository.save(quiz);
        }else {
            throw new EntityNotFoundException("Category not found!");
        }
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
    public List<Quiz> getQuizzesOfCategory(Long cid){
        Optional<Category> optCat = categoryRepository.findById(cid);
        if(optCat.isPresent()){
            Category cat = optCat.get();
            return this.quizRepository.findByCategory(cat);
        } else{
            throw  new EntityNotFoundException("Category not found!");
        }

    }
}
