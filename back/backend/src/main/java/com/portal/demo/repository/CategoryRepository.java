package com.portal.demo.repository;

import com.portal.demo.model.exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    void delete(Optional<Category> cat);
}
