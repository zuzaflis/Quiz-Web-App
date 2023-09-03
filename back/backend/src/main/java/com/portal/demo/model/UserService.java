package com.portal.demo.model;

import com.portal.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public Optional<User> findUser(String username){
        return this.userRepository.findByUsername(username);
    }
}
