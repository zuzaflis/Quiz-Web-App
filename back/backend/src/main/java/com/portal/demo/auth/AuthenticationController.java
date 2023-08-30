package com.portal.demo.auth;

import com.portal.demo.dto.UserRequest;
import com.portal.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    private final UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody UserRequest userRequest)
    {
       return ResponseEntity.ok(userService.createUser(userRequest));
    }
    @PostMapping("/authenticate")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest authRequest)
    {
        return ResponseEntity.ok(userService.authenticate(authRequest));
    }

}
