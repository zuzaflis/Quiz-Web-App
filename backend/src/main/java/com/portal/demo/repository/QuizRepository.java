package com.portal.demo.repository;

import com.portal.demo.model.exam.Category;
import com.portal.demo.model.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
   public List<Quiz> findByCategory(Category category);
}
