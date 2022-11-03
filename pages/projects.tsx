import type { NextPage } from "next";
import Container from "../components/Container";
import { LightBulbOn } from "iconoir-react";

import Projects from "../components/Projects";
import ProjectsEven from "../components/ProjectsEven";
import { useRouter } from "next/router";
import Head from "next/head";
import { IProject } from "../types";
interface Props {
	projects: IProject[];
}

const Projecten: NextPage<Props> = ({ projects }) => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Projects | Sven Nijholt</title>
				<meta
					name="description"
					content="Pagina van de projecten waar Sven Nijholt aan meegewerkt heeft"
				/>
				<meta name="robots" content="index, follow" />
				<meta property="og:type" content="Projecten Sven Nijholt" />
				<meta property="og:title" content="Projecten | Sven Nijholt" />
				<meta
					property="og:description"
					content="Pagina van de projecten waar sven nijholt aan meegewerkt heeft"
				/>
				<meta
					property="og:image"
					content="https://svennijholt.nl/api/image?title=Projects"
				/>
				<meta property="og:url" content="https://svennijholt.nl" />
				<meta property="og:site_name" content="Sven Nijholt" />
			</Head>
			<Container>
				<div className="heading">
					<h1 className="mt-12">
						{router.locale === "en-US" ? "Projects" : "Projecten."}
					</h1>
				</div>
				<div className="inline-flex">
					<LightBulbOn width={24} />
					<span className="ml-2">
						{router.locale === "en-US"
							? "Projects that I have done or contributed to."
							: " Projecten die ik gedaan heb of aan meegewerkt heb."}
					</span>
				</div>

				{projects
					? projects.map((item, idx) =>
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
					  )
					: null}
			</Container>
		</>
	);
};

export default Projecten;

export async function getStaticProps() {
	const res = await fetch("https://www.svennijholt.nl/api/projects");
	const resjson = await res.json();
	console.log(resjson);
	if (resjson.error) return { props: {} };
	const projects = resjson.database_items;
	return {
		props: { projects },
	};
}
