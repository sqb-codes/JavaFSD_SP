import { IssueDisplay } from "./IssuesDisplay";
import { ProjectsDisplay } from "./ProjectsDisplay";

export const AdminDashboard = () => {

    return (
        <div>
            <h3 className="text-2xl font-bold">Admin Dashboard</h3>
            <ProjectsDisplay/>
        </div>
    )
}