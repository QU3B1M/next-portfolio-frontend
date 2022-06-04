import { IconType } from "react-icons/lib";

export interface IService {
	title: string;
	Icon: IconType;
	description?: string;
}

export interface ISkill {
	name: string;
	level: number;
	Icon: IconType;
}

export interface IProject {
	title: string;
	description: string;
	image_path: string;
	deployed_url?: string;
	github_link: string;
	category: Category;
	technologies: string[];
}

// ToDo: this will be replaced by a real data source
export type Category = "python" | "javascript" | "typescript" | "react" | "nodejs" | "golang";