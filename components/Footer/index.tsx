import { Link } from "iconoir-react";
import Image from "next/future/image";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 mb-4">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© {year}{" "}
				<a href="https://svennijholt.nl" className="hover:underline">
					Sven Nijholt
				</a>
				. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6 ">
						NL
					</a>
				</li>
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6">
						ENG
					</a>
				</li>

				<li>
					<a href="#" className="mr-4 hover:underline">
						Contact
					</a>
				</li>

				<li>
					<a href="#" className="hover:underline">
						Sitemap
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
