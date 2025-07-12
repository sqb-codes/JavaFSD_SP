import { useEffect, useState } from "react";

export const AdminDashboard = () => {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const [projects, setProjects] = useState([]);

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

    return (
        <div>
            <h3>ADMIN: You can create and manage projects and issues</h3>
            <h4 className="text-xl font-semibold mt-4">On-going Projects</h4>
            <ul className="list-disc pl-5">
                {projects.map((project) => (
                    // check if project name is not null
                    project.name &&
                    project.description && (
                    <li key={project.id} className="mb-2">
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-gray-600">{project.description}</div>
                    </li>
                    )
                ))}
            </ul>
        </div>
    )
}