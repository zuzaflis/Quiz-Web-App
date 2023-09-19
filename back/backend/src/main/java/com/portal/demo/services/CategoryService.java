package com.portal.demo.services;

import com.portal.demo.model.exam.Category;
import com.portal.demo.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    public Category addCategory(Category category){
        return this.categoryRepository.save(category);
    }
    public Category updateCategory(Category category){
        return this.categoryRepository.save(category);
    }
    public Set<Category> getCategories(){
        return new LinkedHashSet<>(this.categoryRepository.findAll());
    }
    public Category getCategory(Long categoryId){
        return this.categoryRepository.findById(categoryId).get();
    }
    public void deleteCategory(Long categoryId){
     Category cat = this.categoryRepository.findById(categoryId).get();
        categoryRepository.delete(cat);
    }
}
