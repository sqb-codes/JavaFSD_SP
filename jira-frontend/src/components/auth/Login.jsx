import { useState } from "react";
import api from "../services/api";
import axios from "axios";

export const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/auth/login", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            // Check if the response contains a token
            if (!response.data || !response.data.token) {
                throw new Error("Login failed: No token received");
            }
            // Store the token and role in localStorage
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            alert("Login successful!");
        } catch (error) {
            alert("Error: " + error.message);
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <p className="mb-2 text-gray-600">Please enter your username and password to login.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Login
                </button>
            </form>
        </div>
    )

}