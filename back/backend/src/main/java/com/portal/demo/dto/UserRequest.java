package com.portal.demo.dto;

import com.portal.demo.model.UserRole;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String profile;
    private Set<UserRole> userRoles = new HashSet<>();

}
