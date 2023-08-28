package com.portal.demo.service;

import com.portal.demo.auth.AuthenticationResponse;
import com.portal.demo.dto.UserRequest;
import com.portal.demo.dto.UserResponse;

public interface UserService {
    AuthenticationResponse createUser(UserRequest userRequest);
    UserResponse getUserByUsername(String username);
    void deleteUserById(Long id);
}
