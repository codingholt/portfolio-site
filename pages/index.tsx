import type { NextPage } from "next";
import Container from "../components/Container";
import MailModal from "../components/MailModal";
import { IntroText } from "../data";
import { useRouter } from "next/router";
import Head from "next/head";
interface Props {
	langIntroText: string;
}

export async function getStaticProps({ locale }: { locale: string }) {
	const langIntroText = locale === "en-US" ? IntroText.en : IntroText.nl;

	return {
		props: {
			langIntroText,
		},
	};
}
const Home: NextPage<Props> = (props) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Home | Sven Nijholt</title>
				<meta
					name="description"
					content="softwareontwikkelaar met een passie voor alles wat met computers te maken heeft."
				/>
				<meta name="robots" content="index, follow" />
				<meta
					property="og:type"
					content="Portfolio website Sven Nijholt"
				/>
				<meta property="og:title" content="Home | Sven Nijholt" />
				<meta
					property="og:description"
					content="Softwareontwikkelaar met een passie voor alles wat met computers te maken heeft."
				/>
				<meta
					property="og:image"
					content="URL naar afbeelding (Bijv. Headerafbeelding)"
				/>
				<meta property="og:url" content="https://svennijholt.nl" />
				<meta property="og:site_name" content="Sven Nijholt" />
			</Head>
			<Container>
				<div className="heading">
					<p>Sven.</p>
					<p>Sofware Developer.</p>
				</div>
				<div>🇳🇱Netherlands</div>
				<div className="text-gray-700 dark:text-gray-300">
					{props.langIntroText}
				</div>
				{/* <MailModal /> */}
			</Container>
		</>
	);
};

export default Home;
