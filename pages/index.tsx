import type { NextPage } from "next";
import Container from "../components/Container";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
	return (
		<Container>
			<div className="heading">
				<p>Sven.</p>
				<p>Sofware Developer.</p>
			</div>
			<div>🇳🇱Netherlands</div>
			<div className="text-gray-500">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
				commodo ligula eget dolor. Aenean massa. Cum sociis natoque
				penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
				quis, sem. Nulla consequat massa quis enim. Donec pede justo,
				fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
				rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
				felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
				Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
				Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
				enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
				tellus. Phasellus viverra nul.
			</div>
			{/* <Navigation /> */}
		</Container>
	);
};

export default Home;
