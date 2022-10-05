import { CursorPointer } from "iconoir-react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { AppProps } from "next/app";
import Router from "next/router";
import Image from "next/image";
import { eventNames } from "process";
import {
	useEffect,
	useState,
	FormEventHandler,
	ReactPropTypes,
	ComponentProps,
} from "react";
import AddItemForm from "../components/AddItemForm";
import Container from "../components/Container";
import { ProjectData } from "../data";
import { IProject } from "../types";

const Protected: NextPage = (): JSX.Element => {
	const [projectInfo, setProjectInfo] = useState<IProject | undefined>();

	const [formModalOpen, setFormModalOpen] = useState<boolean>(false);
	const { status, data } = useSession();

	useEffect(() => {
		if (status === "unauthenticated") Router.replace("/login");
	}, [status]);

	const handleSubmit: FormEventHandler = async (e) => {
		e.preventDefault();
		console.log("submit is fired");
		// console.log(projectInfo?.img);
		// send to server api route...
		try {
			console.log(projectInfo);
			const pushData = await fetch("/api/projects", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(projectInfo),
			});

			console.log(pushData);
		} catch (e) {
			console.log(e);
		}
	};

	const DashboardTable = () => (
		<table className="">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>description</th>
					<th>link</th>
					<th>img</th>
				</tr>
			</thead>
			<tbody>
				{ProjectData.map((item, idx) => {
					return (
						<tr key={idx} className="h-5 even:bg-gray-100  px-5">
							<td>{"000" + idx}</td>
							<td>{item.name}</td>
							<td className="line-clamp-1">{item.description}</td>
							<td>{item.link}</td>
							{/* <td>{item.img?.name}</td> */}
						</tr>
					);
				})}
			</tbody>
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
				<button
					className="mt-2  rounded-md px-4 py-2 bg-accent-500 text-white"
					onClick={() => setFormModalOpen(true)}
				>
					{" "}
					Open{" "}
				</button>

				{formModalOpen ? (
					<AddItemForm
						onSubmit={handleSubmit}
						setState={setProjectInfo}
						state={projectInfo}
					/>
				) : null}
				<button
					className="mt-2  rounded-md px-4 py-2 bg-accent-500 text-white"
					onClick={() => fetch("/api/projects", { method: "GET" })}
				>
					{" "}
					GET{" "}
				</button>
			</Container>
		);

	return <div>loading</div>;
};

export default Protected;
