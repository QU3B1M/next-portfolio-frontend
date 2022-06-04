import ProjectCard from "../components/ProjectCard";
import { projectList } from "../data";

const projects = () => {
	return (
		<div className="p-4">
			<nav>Navbar</nav>
			<h1>Projects</h1>
			<div className="grid grid-cols-12 gap-4 my-3">
				{projectList.map((project) => (
					<div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4">
						<ProjectCard project={project} key={project.title} />
					</div>
				))}
			</div>
		</div>
	);
};
export default projects;
