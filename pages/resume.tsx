import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
	return (
		<div className="px-6 py-2">
			{/* Experience */}
			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<h5 className="text-2xl font-bold my">Education</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">Ingenieria en cosas</h5>
						<p className="font-semibold">en mi casa 2020-2029</p>
						<p>descripcion de las cosas</p>
					</div>
				</div>
				<div>
					<h5 className="text-2xl font-bold my">Experience</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">Ingenieria en cosas</h5>
						<p className="font-semibold">en mi casa 2020-2029</p>
						<p>descripcion de las cosas</p>
					</div>
				</div>
			</div>
			{/* Skills */}
			<div className="grid gap-6 md:grid-cols-2">
				{/* langs */}
				<div>
					<h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
					<div className="my-2">
						{languages.map((language) => (
							<Bar data={language} key={language.name} />
						))}
					</div>
				</div>
				{/* tools */}
				<div>
					<h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
					<div className="my-2">
						{tools.map((tool) => (
							<Bar data={tool} key={tool.name} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default resume;
