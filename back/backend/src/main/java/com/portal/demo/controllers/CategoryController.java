package com.portal.demo.controllers;

import com.portal.demo.model.exam.Category;
import com.portal.demo.services.CategoryService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/category")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", allowCredentials = "true")
public class CategoryController {
    private final CategoryService categoryService;

    //addCategory
    @PostMapping("/")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        Category cat1 = this.categoryService.addCategory(category);
        return ResponseEntity.ok(cat1);
    }
    //getCategory
    @Transactional
    @GetMapping("/{categoryId}")
    public Category getCategory(@PathVariable("categoryId") Long categoryId){
        return this.categoryService.getCategory(categoryId);
    }
    //get all categories
    @Transactional
    @GetMapping("/")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }
    //updateCategory
    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategory(category);
    }

    //deleteCategory
    @DeleteMapping("/{Id}")
    public void deleteCategory(@PathVariable("Id") Long categoryId){
        this.categoryService.deleteCategory(categoryId);
    }


}
