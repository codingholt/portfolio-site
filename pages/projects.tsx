import type { NextPage } from "next";
import Container from "../components/Container";
import { LightBulbOn } from "iconoir-react";
import { ProjectData } from "../data";
import Projects from "../components/Projects";
import ProjectsEven from "../components/ProjectsEven";
import { useRouter } from "next/router";
interface Props {}

const Projecten: NextPage<Props> = () => {
	const router = useRouter();
	return (
		<Container>
			<div className="heading">
				<p className="mt-12">Projecten.</p>
			</div>
			<div className="inline-flex">
				<LightBulbOn width={24} />
				<span className="ml-2">
					{router.locale === "en-US"
						? "Projects that I have done or contributed to."
						: " Projecten die ik gedaan heb of aan meegewerkt heb."}
				</span>
			</div>

			{ProjectData.map((item, idx) =>
				idx % 2 ? (
					<div key={idx}>
						<ProjectsEven
							name={
								router.locale === "en-US"
									? item.name?.eng!
									: item.name?.nl!
							}
							link={item.link!}
							image={item.image!}
							description={
								router.locale === "en-US"
									? item.description?.eng!
									: item.description?.nl!
							}
						/>
					</div>
				) : (
					<div key={idx}>
						<Projects
							name={
								router.locale === "en-US"
									? item.name?.eng!
									: item.name?.nl!
							}
							link={item.link!}
							image={item.image!}
							description={
								router.locale === "en-US"
									? item.description?.eng!
									: item.description?.nl!
							}
						/>
					</div>
				)
			)}
		</Container>
	);
};

export default Projecten;
