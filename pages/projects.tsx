import type { NextPage } from "next";
import Container from "../components/Container";
import { LightBulbOn } from "iconoir-react";
import { ProjectData } from "../data";
import Projects from "../components/Projects";
import ProjectsEven from "../components/ProjectsEven";
import { useRouter } from "next/router";
import Head from "next/head";
interface Props {}

const Projecten: NextPage<Props> = () => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Home | Sven Nijholt</title>
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
					<p className="mt-12">
						{router.locale === "en-US" ? "Projects" : "Projecten."}
					</p>
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
		</>
	);
};

export default Projecten;