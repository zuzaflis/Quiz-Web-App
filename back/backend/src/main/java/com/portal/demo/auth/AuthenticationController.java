package com.portal.demo.auth;

import com.portal.demo.dto.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", allowCredentials = "true")
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest registerRequest)
    {
       return ResponseEntity.ok(authenticationService.register(registerRequest));
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest authRequest)

    {
        logger.info("Received authentication request for username: {}", authRequest.getUsername());

        return ResponseEntity.ok(authenticationService.authenticate(authRequest));
    }

    @GetMapping("/current-user")
    public Object getCurrentUser(Authentication authentication) {
        return authentication.getPrincipal();
    }

}
