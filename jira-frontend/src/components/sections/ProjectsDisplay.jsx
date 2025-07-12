import { useEffect, useState } from "react";
import { IssueDisplay } from "./IssuesDisplay";
import api from "../services/api";

export const ProjectsDisplay = () => {

    const token = localStorage.getItem("token");

    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    const getProjects = async () => {
        const response = await fetch("http://localhost:8080/api/projects", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            console.error("Failed to fetch projects");
        }
    }

    const handleProjectClick = async (projectId) => {
        setSelectedProject(projectId);
        console.log("Selected Project",selectedProject);
        setLoading(true);
        try {
            const response = await api.get(`issue/project/${projectId}`);
            setIssues(response.data);
        } catch (error) {
            alert("Error while fetching issues...");
            console.log("Error while fetching issues", error);
            setIssues([]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>

            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-5">Projects</h2>
                    <p className="mb-2 text-gray-600">Manage your projects here.</p>
                    <h4 className="text-xl font-semibold my-4">On-going Projects</h4>
                    <ul className="">
                        {projects.map((project) => (
                            // check if project name is not null
                            project.name &&
                            project.description && (
                            <li 
                            key={project.id} 
                            className="mb-2 cursor-pointer border rounded px-4 hover:bg-gray-100" 
                            onClick={() => handleProjectClick(project.id)}>
                                <div className="font-medium">{project.name}</div>
                                <div className="text-sm text-gray-600">{project.description}</div>
                            </li>
                            )
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-5">Issues</h2>
                    <p className="mb-2 text-gray-600">Manage your issues here.</p>
                        {
                            selectedProject && (
                                <div>
                                    {
                                        loading ? (
                                            <p>Loading Issues</p>
                                        ) : <IssueDisplay issueList={issues}/>
                                    }
                                </div>
                            )
                        }
                </div>
            </div>  

        </div>
    )
}