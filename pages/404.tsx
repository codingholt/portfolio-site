import { Computer } from "iconoir-react";
import type { NextPage } from "next";
import Button from "../components/Button";
import Container from "../components/Container";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
	return (
		<Container>
			<div className="heading">
				<p>Oh, nee!</p>
				<p>Pagina niet gevonden - 404</p>
			</div>
			<div className="inline-flex">
				<Computer /> <span className="ml-2">Computer says no...</span>
			</div>
			<div className="text-gray-500">
				Misschien heb je link geklikt die niet geldig is, of heb je
				perongelijk een type fout gemaakt. Misschien bestond hier
				voorheen wel een pagina. Als je terug naar home wil gaan klik
				dan op knop hieronder
			</div>
			<Button buttonText="Home" to="/" extraStyle="mt-2" />
		</Container>
	);
};

export default Home;
