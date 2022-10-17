import type { NextPage } from "next";
import Container from "../components/Container";
import MailModal from "../components/MailModal";
import { IntroText } from "../data";
import { useRouter } from "next/router";

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
	);
};

export default Home;
