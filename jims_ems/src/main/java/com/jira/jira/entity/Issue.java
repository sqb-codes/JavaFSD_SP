package com.jira.jira.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Issue {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Enumerated(EnumType.STRING)
    private Priority priority;

    @ManyToOne
    private Project project;
    // issue belongs to one project, but a project can have multiple issues
    // it sets up a foreign key column project_id in issues table

    @ManyToOne
    private User createdBy;
    // each issue is created by one user, but a user can create many issues
    // JPA will create createdBy foreign key in issues table

    @ManyToOne
    private User assignedTo;


    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
