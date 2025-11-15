package com.portal.demo.auth;

import com.portal.demo.dto.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


// Zarządza operacjami uwierzytelniania użytkowników.
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
        // Rejestruje nowego użytkownika.
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest authRequest)
    {
        // Uwierzytelnia użytkownika.
        logger.info("Received authentication request for username: {}", authRequest.getUsername());
        return ResponseEntity.ok(authenticationService.authenticate(authRequest));
    }

    @GetMapping("/current-user")
    public Object getCurrentUser(Authentication authentication) {
        // Pobiera aktualnie zalogowanego użytkownika.
        return authentication.getPrincipal();
    }

}
