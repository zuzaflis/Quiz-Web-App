package com.portal.demo.controller;

import com.portal.demo.dto.UserRequest;
import com.portal.demo.dto.UserResponse;
import com.portal.demo.model.User;
import com.portal.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    //create user
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@RequestBody UserRequest userRequest){
       userService.createUser(userRequest);
    }

    //get user
    @GetMapping("/{username}")
    @ResponseStatus(HttpStatus.OK)
    public UserResponse getUserByUsername(@PathVariable("username") String username){
        return  userService.getUserByUsername(username);
    }
    //delete user by id
    @DeleteMapping("/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable("userId") Long userId){
        userService.deleteUserById(userId);
    }

}
