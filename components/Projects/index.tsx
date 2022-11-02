import { Link } from "iconoir-react";
import Image from "next/future/image";
import { IProject, multiLang } from "../../types";
import { useRouter } from "next/router";
function Projects({
	name,
	link,
	image,
	description,
}: {
	name: string;
	link: string;
	image: string;
	description: string;
}) {
	const cleanLink = link?.replace(/^https?:\/\//, "").replace(/\/(.*)/, "");
	const router = useRouter();

	return (
		<>
			<div className="lg:grid hidden md:grid-cols-3 my-5 ">
				<div className="col-span-2 h-[450px] overflow-hidden relative rounded-md ring-4 ring-white dark:ring-black shadow-lg dark:shadow-white/40 mr-5">
					<Image
						src={image!}
						loading="lazy"
						className="rounded-md object-cover	"
						fill={true}
						alt={
							"Afbeelding ter illustratie van het project: " +
							name
						}
					/>
				</div>
				<div
					className="rounded-md ring-4 ml-5 ring-white dark:ring-black bg-white 
				dark:bg-black shadow-lg dark:shadow-white/20 col-end-4 h-[450px]"
				>
					<span className="heading-2">{name}</span>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<div className="flex text-gray hover:scale-105 duration-500 hover:text-gray-500">
							<Link width={20} />
							{cleanLink}
						</div>
					</a>

					<div>{description}</div>
				</div>
			</div>
			{/* Mobile */}
			<a href={link!} target="_blank" rel="noopener noreferrer">
				<div className="block relative lg:hidden mx-5 my-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:opacity-80 transform transition duration-500 hover:scale-105 hover:cursor-pointer">
					<div className="z-10">
						<div className="m-5 relative h-64">
							<Image
								className="rounded-lg relative object-cover"
								src={image!}
								fill={true}
								alt={name + " ter illustratie"}
							/>
						</div>
						<div className="mx-5">
							<h5 className="mb-2 heading-2 text-gray-900 dark:text-white">
								{name}
							</h5>
							<div className=""></div>
							<p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
								{description}
							</p>
						</div>
					</div>
				</div>
			</a>
		</>
	);
}

export default Projects;
