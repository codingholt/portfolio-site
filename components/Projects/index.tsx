// import Link from "next/link";
// import { Pages, Social } from "../../data";
// import { HalfMoon, MoonSat, ProfileCircled, SunLight } from "iconoir-react";
// import { themeAtom } from "../../store";
// import { useAtom } from "jotai";
import { Link } from "iconoir-react";
import Image from "next/future/image";
import { IProject } from "../../types";
function Projects({ name, link, img, description }: IProject) {
	// const [theme, setTheme] = useAtom(themeAtom);

	return (
		<>
			<div className="lg:grid hidden md:grid-cols-3 my-5 ">
				<div className="col-span-2 h-[450px] relative rounded-md ring-4 ring-white drop-shadow-md mr-5">
					<Image
						src={img}
						loading="lazy"
						className="rounded-md"
						fill={true}
						alt={
							"Afbeelding ter illustratie van het project: " +
							name
						}
					/>
				</div>
				<div className="rounded-md ring-4 ml-5 ring-white bg-white drop-shadow-md col-end-4 h-[450px]">
					<span className="heading-2">{name}</span>
					<a href={link} rel="noopener noreferrer">
						<div className="flex text-gray hover:scale-105 duration-500 hover:text-gray-500">
							<Link width={20} />
							Project link
						</div>
					</a>

					<div>{description}</div>
				</div>
			</div>
			{/* Mobile */}
			<div className="block relative lg:hidden mx-5 my-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:opacity-80 transform transition duration-500 hover:scale-105 hover:cursor-pointer">
				<div className="z-10">
					<div className="m-5 relative h-56">
						<Image
							className="rounded-lg relative object-cover"
							src={img}
							fill={true}
							// width={1000}
							// height={500}r
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
		</>
	);
}

export default Projects;
