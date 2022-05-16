import { FunctionComponent } from "react";
import { IService } from "../types";

const ServiceCard: FunctionComponent<{ service: IService }> = ({ service: { Icon, title, description } }) => {
	// Renders the inner html of the service description
	const createMarkup = () => {
		return { __html: description };
	};

	return (
		<div className="flex items-center p-2 space-x-4 ">
			<Icon className="w-12 h-12 text-cyan-500" />
			<div>
				<h4 className="font-bold">{title}</h4>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	);
};

export default ServiceCard;
