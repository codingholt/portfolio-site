import { CursorPointer } from "iconoir-react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Container from "../components/Container";
import { ProjectData } from "../data";

const Protected: NextPage = (): JSX.Element => {
	const { status, data } = useSession();

	useEffect(() => {
		if (status === "unauthenticated") Router.replace("/login");
	}, [status]);

	const DashboardTable = () => (
		<table className="">
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>description</th>
				<th>link</th>
				<th>img</th>
			</tr>
			{ProjectData.map((item, idx) => {
				return (
					<tr key={idx} className="h-5 even:bg-gray-100  px-5">
						<td>{"000" + idx}</td>
						<td>{item.name}</td>
						<td className="line-clamp-1">{item.description}</td>
						<td>{item.link}</td>
						<td>{item.img}</td>
					</tr>
				);
			})}
		</table>
	);
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
				<DashboardTable />
			</Container>
			// <div>
			// 	Deze pagina is alleen voor speciale mensen. zoals jij,
			// 	{JSON.stringify(data.user?.name, null, 2)}
			// </div>
		);

	return <div>loading</div>;
};

export default Protected;
