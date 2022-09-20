import Link from "next/link";
import { Router } from "next/router";
import Pages from "../../data";

function Navigation({}: {}) {
	return (
		<div className="ml-5 xl:ring-1 ring-black/50 rounded-md left-0 fixed my-auto top-1/2 -translate-y-1/2 ">
			{Pages.map((page, idx) => (
				<div key={idx}>
					<Link href={page.link}>
						<div className="my-1 rounded-md flex py-3 hover:cursor-pointer mr-5">
							<page.icon className="ml-1" />
							<div className="ml-2">{page.name}</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}

export default Navigation;
