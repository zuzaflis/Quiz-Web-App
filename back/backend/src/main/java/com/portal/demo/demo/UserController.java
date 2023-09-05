package com.portal.demo.demo;

import com.portal.demo.model.User;
import com.portal.demo.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {
    private final UserService userService;

    @GetMapping("/{username}")
    public Optional<User> getUser(@PathVariable("username") String username) {
        return this.userService.findUser(username);
    }

}
