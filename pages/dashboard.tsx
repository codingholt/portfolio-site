import { CursorPointer } from "iconoir-react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Container from "../components/Container";

const Protected: NextPage = (): JSX.Element => {
	const { status, data } = useSession();

	useEffect(() => {
		if (status === "unauthenticated") Router.replace("/login");
	}, [status]);

	const DashboardTable = () => <div>Hello im a table</div>;
	const DashboardHeader = () => (
		<div>
			<p className="heading mt-12">Dashboard</p>
			<p className="inline-flex">
				<CursorPointer />
				<span className="ml-2">Voeg projecten toe of pas ze aan.</span>
			</p>
		</div>
	);
	if (status === "authenticated")
		return (
			// Some Component
			<Container>
				<DashboardHeader />
			</Container>
			// <div>
			// 	Deze pagina is alleen voor speciale mensen. zoals jij,
			// 	{JSON.stringify(data.user?.name, null, 2)}
			// </div>
		);

	return <div>loading</div>;
};

export default Protected;
