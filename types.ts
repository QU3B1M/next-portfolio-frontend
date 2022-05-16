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
