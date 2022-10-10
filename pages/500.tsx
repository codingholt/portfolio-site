import { Computer } from "iconoir-react";
import type { NextPage } from "next";
import Button from "../components/Button";
import Container from "../components/Container";

const Home: NextPage = () => {
	return (
		<Container>
			<div className="heading">
				<p>Oeps!</p>
				<p>Er ging iets fout op de server - 500</p>
			</div>
			<div className="inline-flex">
				<Computer /> <span className="ml-2">Computer says no...</span>
			</div>
			<div className="text-gray-500">
				Probeer het later nog een keer, of neem contact op met
				<code>hey@svennijholt.xyz</code>
			</div>
			<Button buttonText="Home" to="/" extraStyle="mt-2" />
		</Container>
	);
};

export default Home;
