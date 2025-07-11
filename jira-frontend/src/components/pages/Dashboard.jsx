import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminDashboard } from "../sections/AdminDashboard";

export const Dashboard = () => {
    const role = localStorage.getItem("role");
    const navigate = useNavigate();

    useEffect(() => {
        if(!role) {
            navigate("/login");
        }
    }, [role])

    return(
        <div className="">
            <h2 className="text-3xl font-bold">Welcome</h2>

            {role === "ADMIN" && (
                <AdminDashboard/>
            )}

            {role === "DEVELOPER" && (
                <div>
                    <h3>Developer: You can view and manage issues</h3>
                </div>
            )}

        </div>
    )
}