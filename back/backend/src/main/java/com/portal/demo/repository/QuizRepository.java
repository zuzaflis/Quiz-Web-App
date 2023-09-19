package com.portal.demo.repository;

import com.portal.demo.model.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
}
