import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <nav className="bg-blue-600 text-white p-5 flex gap-6 mb-5">
            <Link to="/" className="hover:underline">Home</Link>

            { !token && (
                <>
                    <Link to="/login" className="hover:underline">Login</Link>
                    <Link to="/register" className="hover:underline">Register</Link>
                </>
            )}

            { token && (
                <>
                    <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                    
                    {role === "ADMIN" && (
                        <>
                            <Link to="/projects" className="hover:underline">Add Project</Link>
                            <Link to="/issue" className="hover:underline">Create Issue</Link>
                        </>
                    )}
                    <button onClick={handleLogout} className="hover:underline">Logout</button>
                </>
            )}
        </nav>
    )
}

export default Navbar;