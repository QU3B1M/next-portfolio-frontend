import { FunctionComponent } from "react";
import { ISkill } from "../types";

const Bar: FunctionComponent<{ data: ISkill }> = ({ data: { Icon, level, name } }) => {
	return (
		<div className="my-2 bg-gray-300 rounded-full text-neutral-50 ">
			<div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-sky-500" style={{ width: `${level}%` }}>
				<Icon className="mr-3" />
				{name}
			</div>
		</div>
	);
};

export default Bar;
