import { Computer } from "iconoir-react";
import type { NextPage } from "next";
import Button from "../components/Button";
import Container from "../components/Container";
import { useRouter } from "next/router";

const Error: NextPage = () => {
	const router = useRouter();
	const { error } = router.query;

	return (
		<Container>
			<div className="heading">
				<p>Sorry :(</p>
				<p>{error}</p>
			</div>
			<div className="inline-flex">
				<Computer /> <span className="ml-2">Computer says no...</span>
			</div>
			<div className="text-gray-500">
				Sorry er ging iets fout met inloggen probeer het opnieuw door op
				de knop hieronder te klikken.
			</div>
			<Button buttonText="Login" to="/login" extraStyle="mt-2" />
		</Container>
	);
};

export default Error;
