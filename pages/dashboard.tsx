import { CursorPointer } from "iconoir-react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState, FormEventHandler } from "react";
import AddItemForm from "../components/AddItemForm";
import Container from "../components/Container";
import { IProject } from "../types";

const Protected: NextPage = (): JSX.Element => {
	const [projectInfo, setProjectInfo] = useState<IProject | undefined>({
		name: "",
		description: "",
		link: "",
		image: "",
	});
	const [projectInfoFromDB, setProjectInfoFromDB] = useState<
		IProject[] | undefined
	>([
		{
			id: 0,
			name: "",
			description: "",
			link: "",
			image: "",
		},
	]);
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
		if (json.succes) setFormModalOpen(false);
		return await json;
	}

	async function getDatabase() {}

	const handleSubmit: FormEventHandler = async (e) => {
		e.preventDefault();

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

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch("/api/projects", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const json = await data.json();

			setProjectInfoFromDB(json.database_items);
		};

		fetchData().catch(console.error);
	}, [setProjectInfoFromDB]);

	const DashboardTable = () => (
		<table className=" table-fixed  	w-full overflow-hidden">
			<thead>
				<tr>
					<th className="break-all">Id</th>
					<th className="break-all">Name</th>
					<th className="break-all">description</th>
					<th className="break-all">link</th>
					<th className="break-all">img</th>
				</tr>
			</thead>
			<tbody>
				{projectInfoFromDB!.map((item, idx) => {
					return (
						<tr
							key={idx}
							className="h-5 even:bg-gray-100/50 even:dark:bg-gray-800 max-w-full px-5"
						>
							<td className="break-all w-5">{item.id}</td>
							<td className="break-all w-auto">{item.name}</td>
							<td className="break-all w-auto">
								{item.description}
							</td>
							<td className="break-all line-clamp-1 w-auto">
								{item.link}
							</td>
							<td className="break-all truncate w-auto">
								{item.image}
								{/* //TODO change type of IProject img to image */}
							</td>
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
			</Container>
		);
	}
	return <div>loading</div>;
};

export default Protected;
