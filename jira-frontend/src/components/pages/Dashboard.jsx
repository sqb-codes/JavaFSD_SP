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