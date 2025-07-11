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
        } else {
            console.error("Failed to fetch projects");
        }
    }

    return (
        <div>
            <h3>ADMIN: You can create and manage projects and issues</h3>
        </div>
    )
}