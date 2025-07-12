import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export const IssueDisplay = ({issueList}) => {

    return (
        <div>
            {issueList.length > 0 ? (
                <ul>
                    {issueList.map(issue => (
                        <li key={issue.id}>
                            <h4 className="text-2xl font-bold">{issue.project.name}</h4>
                            <Link>{issue.title}</Link>
                            <p>Status: {issue.status}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No issues created yet...</p>
            )}
        </div>
    );

}