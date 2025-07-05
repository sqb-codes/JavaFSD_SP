package com.jira.jira.dto;

import com.jira.jira.entity.Priority;
import lombok.Data;

@Data
public class CreateIssueRequest {
    private String title;
    private String description;
    private Priority priority;
    private Long projectId;
}
