package com.portal.demo.auth;


import com.portal.demo.config.JwtService;
import com.portal.demo.model.Role;
import com.portal.demo.model.User;
import com.portal.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest registerRequest) {

        if(userRepository.findByUsername(registerRequest.getUsername()).isPresent()){
            throw new IllegalArgumentException("Uzytkownik o podanym username już istnieje");
        }

        User user = User.builder()
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .email(registerRequest.getEmail())
                .phone(registerRequest.getPhone())
                .profile(registerRequest.getProfile())
                .role((registerRequest.getRole()==null)? Role.USER : registerRequest.getRole() )
                .build();
        userRepository.save(user);
        System.out.println(String
                .format("User %s is saved", user.getUsername()));

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );
        var user = userRepository.findByUsername(authenticationRequest.getUsername())
                .orElseThrow(()-> new UsernameNotFoundException("wtf"));

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

}
