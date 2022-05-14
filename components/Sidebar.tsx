import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import {RiLightbulbFlashFill} from "react-icons/ri";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<img src="https://avatars.githubusercontent.com/u/44633633?v=4" alt="Avatar" className="w-32 h-32 mx-auto rounded-full" />
			<h3 className="my-4 text-3xl font-medium tracking-wider">
				<span>Quebim </span>
				Ldzma
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Backend Developer</p>
			<a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href="" download="">
				<GiTie className="w-6 h-6" />
				Download Resume
			</a>
			{/* social icons */}
			<div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
				<a href="">
					<AiFillGithub className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="">
					<AiFillLinkedin className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="">
					<AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
				</a>
			</div>
			<div className="py-4 my-5 bg-gray-200" style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
				<div className="flex items-center justify-center space-x-2">
					<GoLocation />
					<span>Buenos Aires, Argentina</span>
				</div>
				<p className="my-2">kevinledesmam95@gmail.com</p>
				<p className="my-2">123123123123</p>
			</div>
			<button className="text-blue-500"><RiLightbulbFlashFill className="w-8 h-8 cursor-pointer"/></button>
		</div>
	);
};

export default Sidebar;
