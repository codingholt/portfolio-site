import type { NextPage } from "next";
import Container from "../components/Container";
import { LightBulbOn } from "iconoir-react";
import { ProjectData } from "../data";
import Projects from "../components/Projects";
import { link } from "fs";
import Image from "next/image";
import ProjectsEven from "../components/ProjectsEven";

const Projecten: NextPage = () => {
	return (
		<Container>
			<div className="heading">
				<p className="mt-12">Projecten.</p>
			</div>
			<div className="inline-flex">
				<LightBulbOn width={24} />
				<span className="ml-2">
					Projecten die ik gedaan heb of aan meegewerkt heb.
				</span>
			</div>

			{ProjectData.map((item, idx) =>
				idx % 2 ? (
					<div key={idx}>
						<ProjectsEven
							name={item.name}
							link={item.link}
							img={item.img}
							description={item.description}
						/>
					</div>
				) : (
					<div key={idx}>
						<Projects
							name={item.name}
							link={item.link}
							img={item.img}
							description={item.description}
						/>
					</div>
				)
			)}
		</Container>
	);
};

export default Projecten;
