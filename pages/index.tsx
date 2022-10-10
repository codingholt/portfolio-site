import type { NextPage } from "next";
import Container from "../components/Container";
import { IntroText } from "../data";

const Home: NextPage = () => {
	return (
		<Container>
			<div className="heading">
				<p>Sven.</p>
				<p>Sofware Developer.</p>
			</div>
			<div>🇳🇱Netherlands</div>
			<div className="text-gray-700">{IntroText}</div>
		</Container>
	);
};

export default Home;
