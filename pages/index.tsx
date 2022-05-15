import { GetServerSidePropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

export default function index() {
	return (
		<div className="flex flex-col flex-grow px-6 pt-1">
			<h5 className="my-3 font-medium">
        Im Quebim bla bla bla bla bla bla bla bla bl bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(service => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1"><ServiceCard service={service}/></div>
          ))}
        </div>  
      </div>
		</div>
	);
}

// This will be called by Next.js everytime before rendering the page
// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
// 	const res = await fetch("http://localhost:3000/api/services");
// 	const data = await res.json();
// 	return {
// 		props: {
// 			services: data.services,
// 		},
// 	};
// };

// This will be called by Next.js one time in the building time.
// export const getStaticProps = async (context: GetServerSidePropsContext) => {
// 	const res = await fetch("http://localhost:3000/api/services");
// 	const data = await res.json();
// 	return {
// 		props: {
// 			services: data.services,
// 		},
// 	};
// };
