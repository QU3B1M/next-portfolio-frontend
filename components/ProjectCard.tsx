import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

const ProjectCard: FunctionComponent<{
	project: IProject;
}> = ({ project }) => {
  const [show, setShow] = useState(false);
	return (
		<div className="p-4">
			<img src={project.image_path} alt={project.title} className="cursor-pointer" onClick={() => setShow(true)}/>
			<p className="my-2 text-center">{project.title}</p>
      {show && (
			<div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 bg-gray-100 md:grid-cols-2 gap-x-12 dark:bg-slate-500">
        <img src={project.image_path} alt={project.title} />
        <div className="flex justify-center my-4 space-x-3">
          <a className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-slate-700" href={project.deployed_url}><AiFillGithub/><span>Github</span></a>
          <a className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-slate-700" href={project.deployed_url}><AiFillProject/><span>Deployed</span></a>
        </div>
        <div >
          <h2 className="mb-3 text-xl font-medium md:text-2xl">{project.title}</h2>
				  <h3 className="mb-3 font-medium ">{project.description}</h3>
          <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
            {
              project.technologies.map((tech) => (
                <span className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-slate-700" key={tech}>{tech}</span>
              ))
            }
          </div>
        </div>
        <button onClick={() => setShow(false)} className="absolute bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-slate-700"> <MdClose size={30}/> </button>
      </div>)}
		</div>
	);
};

export default ProjectCard;
