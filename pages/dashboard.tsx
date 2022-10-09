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
	const [projectInfo, setProjectInfo] = useState<IProject | undefined>({
		name: "",
		description: "",
		link: "",
		img: "",
	});
	const [imageState, setImageState] = useState<Blob | undefined>(undefined);

	const [formModalOpen, setFormModalOpen] = useState<boolean>(false);
	const { status, data } = useSession();

	useEffect(() => {
		if (status === "unauthenticated") Router.replace("/login");
	}, [status]);
	async function getImgUrl(img: Blob) {
		const formData = new FormData();
		formData.append("file", img);
		formData.append("upload_preset", "uploads-preset");

		const data: any = await fetch(
			"https://api.cloudinary.com/v1_1/dv2hompuz/image/upload",
			{
				method: "POST",
				body: formData,
			}
		);
		const json = await data.json();
		return await json.secure_url;
	}

	async function postDatabase(projectData: IProject) {
		const data = await fetch("/api/projects", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(projectData),
		});
		const json = await data.json();
		return await json;
	}

	async function getDatabase() {
		const data = await fetch("/api/projects", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await data.json();
		return await json;
	}

	const handleSubmit: FormEventHandler = async (e) => {
		e.preventDefault();
		console.log("submit is fired");
		// console.log(projectInfo?.img);

		const imgUrl = await getImgUrl(imageState!);
		setProjectInfo((projectInfo) => {
			const newProjectInfo = {
				...projectInfo,
				img: imgUrl,
			};
			postDatabase(newProjectInfo);
			return newProjectInfo;
		});
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

	if (status === "authenticated") {
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
					Nieuw Project{" "}
				</button>

				{formModalOpen ? (
					<AddItemForm
						setModal={setFormModalOpen}
						onSubmit={handleSubmit}
						setState={setProjectInfo}
						state={projectInfo}
						setImage={setImageState}
					/>
				) : null}
				{/* <button
					className="mt-2  rounded-md px-4 py-2 bg-accent-500 text-white"
					onClick={() => fetch("/api/projects", { method: "GET" })}
				>
					{" "}
					GET{" "}
				</button> */}
			</Container>
		);
	}
	return <div>loading</div>;
};

export default Protected;
