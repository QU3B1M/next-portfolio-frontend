import { ThemeProvider } from "next-themes";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
				{/* setea la sidebar lg: tamaño en large, el ultimo es para celus */}
				<div className="col-span-12 p-4 text-center bg-white dark:bg-slate-900 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
					<Sidebar />
				</div>
				{/* setea el componente main lg: tamaño en large, el ultimo es para celus */}
				<div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-slate-900 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
					<Navbar />
					<Component {...pageProps} />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
