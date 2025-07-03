package com.jira.jira.controller;

import com.jira.jira.dto.AuthRequest;
import com.jira.jira.dto.AuthResponse;
import com.jira.jira.dto.RegisterUser;
import com.jira.jira.entity.User;
import com.jira.jira.repository.UserRepository;
import com.jira.jira.service.UserDetailServiceImpl;
import com.jira.jira.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDateTime;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired private AuthenticationManager authenticationManager;
    @Autowired private JWTUtil jwtUtil;
    @Autowired private UserDetailServiceImpl userDetailService;
    @Autowired private UserRepository userRepository;
    @Autowired private PasswordEncoder passwordEncoder;

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterUser request) {
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(request.getPassword())
                .role(request.getRole())
                .createdAt(LocalDateTime.now())
                .build();
        userRepository.save(user);
        return  ResponseEntity.ok("User registered...");
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest authRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(),
                        authRequest.getPassword())
        );
        UserDetails userDetails = userDetailService.loadUserByUsername(authRequest.getUsername());
        String token = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthResponse(token));
    }

}
