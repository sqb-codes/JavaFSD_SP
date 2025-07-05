package com.jira.jira.controller;

import com.jira.jira.entity.Project;
import com.jira.jira.entity.User;
import com.jira.jira.repository.ProjectRepository;
import com.jira.jira.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody Project project,
                                                 Principal principal) {
        // Principal - refers to current authenticated user
        User user = userRepository.findByUsername(principal.getName()).orElseThrow();
        project.setCreatedBy(user);
        project.setCreatedAt(LocalDateTime.now());
        return ResponseEntity.ok(projectRepository.save(project));
    }
}
