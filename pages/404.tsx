import { Computer } from "iconoir-react";
import type { NextPage } from "next";
import Button from "../components/Button";
import Container from "../components/Container";
import { useRouter } from "next/router";
interface Props {
	bodyText: string;
}
export async function getStaticProps({ locale }: { locale: string }) {
	const dutch =
		"Misschien heb je link geklikt die niet geldig is, of heb je perongelijk een type fout gemaakt. Misschien bestond hier voorheen wel een pagina. Als je terug naar home wil gaan klik dan op knop hieronder";
	const eng =
		"Maybe you clicked a link that is not valid, or you accidentally made a typing error. Maybe a page existed here before. If you want to go back home click the button below";

	const bodyText = locale === "en-US" ? eng : dutch;

	return {
		props: { bodyText },
	};
}

const Home: NextPage<Props> = (props) => {
	const router = useRouter();

	return (
		<Container>
			<div className="heading">
				<p>{router.locale === "en-US" ? "Oh, no!" : "Oh, nee!"}</p>
				<p>
					{router.locale === "en-US"
						? "Page not found"
						: "Pagina niet gevonden"}
					- 404
				</p>
			</div>
			<div className="inline-flex">
				<Computer /> <span className="ml-2">Computer says no...</span>
			</div>
			<div className="text-gray-500">{props.bodyText}</div>
			<Button buttonText="Home" to="/" extraStyle="mt-2" />
		</Container>
	);
};

export default Home;
