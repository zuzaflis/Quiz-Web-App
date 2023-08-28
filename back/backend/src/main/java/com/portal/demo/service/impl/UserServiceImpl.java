package com.portal.demo.service.impl;

import com.portal.demo.auth.AuthenticationResponse;
import com.portal.demo.config.JwtService;
import com.portal.demo.dto.UserRequest;
import com.portal.demo.dto.UserResponse;
import com.portal.demo.model.User;
import com.portal.demo.repository.RoleRepository;
import com.portal.demo.repository.UserRepository;
import com.portal.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

   private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public AuthenticationResponse createUser(UserRequest userRequest) {

        if(userRepository.findByUsername(userRequest.getUsername()) != null){
            throw new IllegalArgumentException("Uzytkownik o podanym username już istnieje");
        }

     User user = User.builder()
             .username(userRequest.getUsername())
             .password(passwordEncoder.encode(userRequest.getPassword()))
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
     var jwtToken = jwtService.generateToken(user);
     return AuthenticationResponse.builder()
             .token(jwtToken)
             .build();
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
