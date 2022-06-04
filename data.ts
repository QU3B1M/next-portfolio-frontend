import { RiAddCircleFill, RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "./types";


// TODO: Replace this with real data source.

export const services: IService[] = [
	{
		title: "Web Development",
		description: "I build web applications using the latest technologies and frameworks.",
		Icon: RiComputerLine,
	},
	{
		title: "Web Development",
		description: "I build web applications using the latest technologies and frameworks.",
		Icon: RiComputerLine,
	},
	{
		title: "Web Development",
		description: "I build web applications using the latest technologies and frameworks.",
		Icon: RiComputerLine,
	},
	{
		title: "Web Development",
		description: "I build web applications using the latest technologies and frameworks.",
		Icon: RiComputerLine,
	},
	{
		title: "Web Development",
		description: "I build web applications using the latest technologies and frameworks.",
		Icon: RiComputerLine,
	},
];

export const languages: ISkill[] = [
	{
		name: "HTML",
		level: 30,
		Icon: RiAddCircleFill,
	},
	{
		name: "CSS",
		level: 90,
		Icon: RiAddCircleFill,
	},
	{
		name: "JavaScript",
		level: 55,
		Icon: RiAddCircleFill,
	},
	{
		name: "TypeScript",
		level: 90,
		Icon: RiAddCircleFill,
	},
	{
		name: "React",
		level: 30,
		Icon: RiAddCircleFill,
	},
];

export const tools: ISkill[] = [
	{
		name: "Git",
		level: 33,
		Icon: RiAddCircleFill,
	},
	{
		name: "GitHub",
		level: 90,
		Icon: RiAddCircleFill,
	},
	{
		name: "GitLab",
		level: 66,
		Icon: RiAddCircleFill,
	},
	{
		name: "GitHub",
		level: 77,
		Icon: RiAddCircleFill,
	},
	{
		name: "GitLab",
		level: 88,
		Icon: RiAddCircleFill,
	},
];

export const projectList: IProject[] = [
	{
		title: "Project 1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image_path: "/images/default.jpg",
		deployed_url: "https://www.google.com",
		github_link: "https://www.google.com",
		category: "python",
		technologies: ["python", "javascript", "typescript", "react", "nodejs", "golang"],
	},
	{
		title: "Project 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image_path: "/images/default.jpg",
		deployed_url: "https://www.google.com",
		github_link: "https://www.google.com",
		category: "python",
		technologies: ["python", "javascript", "typescript", "react", "nodejs", "golang"],
	},
	{
		title: "Project 3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		image_path: "/images/default.jpg",
		deployed_url: "https://www.google.com",
		github_link: "https://www.google.com",
		category: "python",
		technologies: ["python", "javascript", "typescript", "react", "nodejs", "golang"],
	},
];
