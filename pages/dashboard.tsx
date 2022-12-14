import { utimes } from "fs";
import { CursorPointer } from "iconoir-react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState, FormEventHandler } from "react";
import AddItemForm from "../components/AddItemForm";
import Container from "../components/Container";
import EditItemFrom from "../components/EditItemForm";
import { IProject } from "../types";
import { signOut } from "next-auth/react";

interface EditIProject {
	show: boolean;
	idx: number;
}

const Protected: NextPage = (): JSX.Element => {
	const [projectInfo, setProjectInfo] = useState<IProject | undefined>({
		name: {
			eng: "",
			nl: "",
		},
		description: {
			eng: "",
			nl: "",
		},
		link: "",
		image: "",
	});
	const [projectInfoFromDB, setProjectInfoFromDB] = useState<
		IProject[] | undefined
	>([
		{
			id: 0,
			name: {
				eng: "",
				nl: "",
			},
			description: {
				eng: "",
				nl: "",
			},
			link: "",
			image: "",
		},
	]);
	function revalidate() {
		fetch("/api/revalidate");
	}

	const [editProjectInfo, seteditProjectInfo] = useState<IProject>();
	const [imageState, setImageState] = useState<Blob | undefined>(undefined);
	const [formModalOpen, setFormModalOpen] = useState<boolean>(false);
	const [editformModalOpen, setEditFormModalOpen] = useState<EditIProject>({
		show: false,
		idx: 0,
	});

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
		).catch((err) => console.log(err));
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
		if (json.succes) {
			const dbitem = json.new_database_item as IProject;
			setProjectInfoFromDB([
				...projectInfoFromDB!,
				{
					id: dbitem.id,
					name: dbitem.name,
					description: dbitem.description,
					link: dbitem.link,
					image: dbitem.image,
				},
			]);
			setFormModalOpen(false);
			revalidate();
		}
		return await json;
	}

	async function putDatabase(projectData: IProject) {
		const data = await fetch(`/api/projects/${editProjectInfo?.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(projectData),
		});
		const json = await data.json();
		revalidate();
		if (json.succes) {
			setEditFormModalOpen({ idx: editformModalOpen.idx, show: false });
		}
		return await json;
	}

	const handleSubmit: FormEventHandler = async (e) => {
		e.preventDefault();

		const imgUrl = await getImgUrl(imageState!);
		setProjectInfo((projectInfo) => {
			const newProjectInfo = {
				...projectInfo,
				image: imgUrl,
			};
			postDatabase(newProjectInfo);
			return newProjectInfo;
		});
	};
	const handleDelete = async () => {
		const fetchDel = await fetch(`/api/projects/${editProjectInfo?.id}`, {
			method: "DELETE",
		});
		const json = await fetchDel.json();
		if (json.succes) {
			setEditFormModalOpen({ idx: editformModalOpen.idx, show: false });
			revalidate();
		}

		return json as JSON;
	};

	const handleEditSubmit: FormEventHandler = async (e) => {
		e.preventDefault();

		const imgUrl = await getImgUrl(imageState!);
		seteditProjectInfo((editProjectInfo) => {
			const newProjectInfo = {
				...editProjectInfo,
				image: imgUrl,
			};
			putDatabase(newProjectInfo);
			return newProjectInfo;
		});
	};
	function editProject(idx: number) {
		setEditFormModalOpen({
			show: true,
			idx: idx,
		});
		seteditProjectInfo(projectInfoFromDB![idx]);
	}
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
		<>
			<table className=" table table-fixed border-spacing-y-1.5	border-separate	w-full overflow-hidden">
				<thead className="table-header-group">
					<tr className="table-row">
						<th className="table-cell break-all">id</th>
						<th className=" table-cell break-all">Naam</th>
						<th className=" table-cell break-all">Beschrijving</th>
						<th className="break-all">Link</th>
						<th className="break-all">Afbeelding</th>
					</tr>
				</thead>
				<tbody className="">
					{projectInfoFromDB!.map((item, idx) => {
						return (
							<tr
								key={idx}
								className=" even:bg-gray-100/50 group even:dark:bg-gray-800 max-w-full table-row hover:bg-accent-200/50 even:hover:bg-accent-400/50 dark:even:hover:bg-accent-400/50"
								onClick={() => editProject(idx)}
							>
								<td className="break-all table-cell rounded-l-md px-1">
									{item.id}
								</td>
								<td className="break-all table-cell ">
									{item.name?.nl}
								</td>

								<td className="break-all table-cell truncate">
									{item.description?.nl}
								</td>
								<td className="break-all table-cell truncate ">
									{item.link}
								</td>
								<td className="break-all table-cell truncate rounded-r-md ">
									{item.image}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
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

				{editformModalOpen.show ? (
					<EditItemFrom
						onDelete={handleDelete}
						setModal={setEditFormModalOpen}
						idx={editformModalOpen.idx}
						onSubmit={handleEditSubmit}
						setState={seteditProjectInfo}
						state={editProjectInfo}
						setImage={setImageState}
					/>
				) : null}
				<div className="fixed bottom-0 right-0 mr-4 mb-4">
					<button
						type="button"
						className="px-4 py-3  bg-red-500/80 text-white rounded-lg min-w-prose text-xs
										hover:bg-red-500 hover:cursor-pointer hover:scale-105 duration-500 "
						onClick={() => signOut()}
					>
						Log uit
					</button>
				</div>
			</Container>
		);
	}
	return <div>loading</div>;
};

export default Protected;
