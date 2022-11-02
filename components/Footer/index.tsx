import Link from "next/link";
import { Pages, Social } from "../../data";
import { useRouter } from "next/router";
const ExternalLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<a
		className="text-gray-500 hover:text-gray-600 transition"
		target="_blank"
		rel="noopener noreferrer"
		href={href}
	>
		{children}
	</a>
);

export default function Footer() {
	const router = useRouter();
	const { pathname, asPath, query } = router;
	return (
		<footer className="flex flex-col justify-center items-center max-w-3xl  mx-auto w-full">
			<hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

			<div className="w-full max-w-3xl grid grid-cols-1 gap-4 pb-4 sm:grid-cols-3">
				<div className="flex flex-col space-y-4">
					{Pages.map((page, idx) => {
						return (
							<Link href={page.link} key={idx}>
								<a className="text-gray-500 hover:text-gray-600 transition ">
									<span className="hover:bg-gray-100 p-2 rounded-md transition duration-200">
										{page.name}
									</span>
								</a>
							</Link>
						);
					})}
				</div>
				<div className="flex flex-col space-y-4">
					{Social.map((page, idx) => {
						return (
							<ExternalLink href={page.link} key={idx}>
								<span className="hover:bg-gray-100 p-2 rounded-md transition duration-200">
									{page.name}
								</span>
							</ExternalLink>
						);
					})}
					{/* <span className="hover:bg-gray-100 p-2 rounded-md transition duration-200">
						Email: contact@svennijholt.xyz
					</span> */}
				</div>
				<div className="flex flex-col space-y-4 	">
					<div
						className="hover:cursor-pointer"
						onClick={() =>
							router.push({ pathname, query }, asPath, {
								locale: "nl-NL",
							})
						}
					>
						<span className="hover:bg-gray-100 text-gray-500 hover:text-gray-600 transition duration-200 p-2 rounded-md">
							Nederlands
						</span>
					</div>
					<div
						className="hover:cursor-pointer right-0"
						onClick={() =>
							router.push({ pathname, query }, asPath, {
								locale: "en-US",
							})
						}
					>
						<span
							className="hover:bg-gray-100 text-gray-500 hover:text-gray-600 
						 p-2 rounded-md transition duration-200"
						>
							English
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
