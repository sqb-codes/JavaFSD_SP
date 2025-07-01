package com.jira.jira.repository;

import com.jira.jira.entity.Project;
import com.jira.jira.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByCreatedBy(User user);
}
