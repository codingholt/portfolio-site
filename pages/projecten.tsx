import type { NextPage } from "next";
import Container from "../components/Container";
import { LightBulbOn } from "iconoir-react";
import { ProjectData } from "../data";
import Projects from "../components/Projects";
import { link } from "fs";
import Image from "next/image";

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

			{ProjectData.map((item, idx) => (
				<div key={idx}>
					<Projects
						name={item.name}
						link={item.link}
						img={item.img}
						description={item.description}
					/>
				</div>
			))}
		</Container>
	);
};

export default Projecten;
