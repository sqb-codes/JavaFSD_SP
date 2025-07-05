package com.jira.jira.repository;

import com.jira.jira.entity.Issue;
import com.jira.jira.entity.Project;
import com.jira.jira.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    List<Issue> findByProject(Project project);
    List<Issue> findByAssignedTo(User user);
}
