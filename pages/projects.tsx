import ProjectCard from "../components/ProjectCard";
import { projectList } from "../data";

const projects = () => {
	return (
		<div className="px-4 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
			<nav>Navbar</nav>
			<h1>Projects</h1>
			<div className="relative grid grid-cols-12 gap-4 my-3">
				{projectList.map((project) => (
					<div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-slate-700">
						<ProjectCard project={project} key={project.title} />
					</div>
				))}
			</div>
		</div>
	);
};
export default projects;
