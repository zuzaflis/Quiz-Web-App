package com.portal.demo.service;

import com.portal.demo.auth.AuthenticationRequest;
import com.portal.demo.auth.AuthenticationResponse;
import com.portal.demo.dto.UserRequest;
import com.portal.demo.dto.UserResponse;

public interface UserService {
    AuthenticationResponse createUser(UserRequest userRequest);
    AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest);
    UserResponse getUserByUsername(String username);
    void deleteUserById(Long id);
}
