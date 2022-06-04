import { FunctionComponent } from "react";
import { IProject } from "../types";

const ProjectCard: FunctionComponent<{
    project: IProject;
}> = ({ project }) => {
    return (
        <div className="p-4">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.deployed_url}</p>
        </div>
    );
}

export default ProjectCard;