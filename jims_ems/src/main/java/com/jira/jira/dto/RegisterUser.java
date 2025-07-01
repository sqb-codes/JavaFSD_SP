package com.jira.jira.dto;

import com.jira.jira.entity.Role;
import lombok.Data;

@Data
public class RegisterUser {
    private String username;
    private String email;
    private String password;
    private Role role;
}
