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
		<div className="grid grid-cols-1 md:grid-cols-3 ">
			<div className="col-span-2 h-[450px] relative rounded-md ring-4 ring-white drop-shadow-md mr-5">
				<Image
					src=""
					loading="lazy"
					className="rounded-md"
					fill={true}
					alt={"Afbeelding ter illustratie van het project: " + name}
				/>
			</div>
			<div className="rounded-md ring-4 ml-5 ring-white bg-white drop-shadow-md col-end-4 h-[450px]">
				<span className="heading-2">{name}</span>
				<div className="flex text-gray">
					<Link width={20} />
					<a href={link}>Project link</a>
				</div>

				<div>{description}</div>
			</div>
		</div>
	);
}

export default Projects;
