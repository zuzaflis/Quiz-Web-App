package com.portal.demo.service;

import com.portal.demo.dto.UserRequest;
import com.portal.demo.dto.UserResponse;
import com.portal.demo.model.User;
import com.portal.demo.model.UserRole;

import java.util.Set;

public interface UserService {
    void createUser(UserRequest userRequest);
    UserResponse getUserByUsername(String username);
    void deleteUserById(Long id);
}
