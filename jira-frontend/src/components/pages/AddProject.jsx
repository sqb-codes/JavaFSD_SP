import axios from "axios";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const AddProject = () => {

    const [form, setForm] = useState({
        name: "",
        description: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/projects", form);
            console.log("Form submitted successfully:", form);
            console.log(response.data);
            alert("Project created successfully!");
            navigate("/dashboard");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return(
        <div>
            <h2 className="text-3xl font-bold">Add New Project</h2>
            <p className="mb-2 text-gray-600">Fill in the details to create a new project.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name</label>
                    <input
                        type="text"
                        id="projectName"
                        name="name"
                        placeholder="Enter project name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description</label>
                    <textarea
                        id="projectDescription"
                        name="description"
                        placeholder="Enter project description"
                        required
                        value={form.description}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-20 p-2"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Create Project
                </button>
            </form>
        </div>
    )
}