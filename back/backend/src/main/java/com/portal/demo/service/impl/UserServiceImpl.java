package com.portal.demo.service.impl;

import com.portal.demo.dto.UserRequest;
import com.portal.demo.dto.UserResponse;
import com.portal.demo.model.User;
import com.portal.demo.model.UserRole;
import com.portal.demo.repository.RoleRepository;
import com.portal.demo.repository.UserRepository;
import com.portal.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Override
    public void createUser(UserRequest userRequest) {

     User user = User.builder()
             .username(userRequest.getUsername())
             .password(userRequest.getPassword())
             .firstName(userRequest.getFirstName())
             .lastName(userRequest.getLastName())
             .email(userRequest.getEmail())
             .phone(userRequest.getPhone())
             .profile(userRequest.getProfile())
             .userRoles(userRequest.getUserRoles())
             .build();
     userRepository.save(user);
     System.out.println(String
             .format("User %s is saved", user.getUsername()));
    }

    @Override
    public UserResponse getUserByUsername(String username) {
       return mapToUserResponse(userRepository.findByUsername(username));
    }

    @Override
    public void deleteUserById(Long id) {
        this.userRepository.deleteById(id);
    }

    private UserResponse mapToUserResponse(User user){
        return UserResponse.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .profile(user.getProfile())
                .userRoles(user.getUserRoles())
                .build();

    }
}
