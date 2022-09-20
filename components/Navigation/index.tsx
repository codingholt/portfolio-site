import Link from "next/link";
import { Pages, Social } from "../../data";

function Navigation({}: {}) {
	return (
		<>
			{/* Desktop */}
			<div className="ml-5 xl:ring-1 shadow-md ring-black/10 rounded-md left-0 hidden xl:inline-block xl:fixed my-auto top-1/2 -translate-y-1/2">
				{Pages.map((page, idx) => (
					<div key={idx}>
						<Link href={page.link}>
							<div className="my-1 rounded-md flex py-3 hover:cursor-pointer pr-20 hover:scale-105 duration-500 hover:bg-gray-100/50 pl-5">
								<page.icon className="" />
								<div className="ml-2">{page.name}</div>
							</div>
						</Link>
					</div>
				))}
				{Social.map((page, idx) => (
					<div key={idx}>
						<Link href={page.link}>
							<div className="my-1 rounded-md flex py-3 hover:cursor-pointer pr-20 hover:scale-105 duration-500 hover:bg-gray-100/50 pl-5">
								<page.icon className="" />
								<div className="ml-2">{page.name}</div>
							</div>
						</Link>
					</div>
				))}
			</div>
			{/* Mobile */}
			<div className="flex justify-center fixed h-7 xl:hidden w-screen	z-10">
				{Pages.map((page, idx) => (
					<div key={idx}>
						<Link href={page.link}>
							<div className="hover:scale-105 mx-5 mt-2">
								<page.icon className="" />
								{/* <div className="ml-2">{page.name}</div> */}
							</div>
						</Link>
					</div>
				))}
				<div className="mx-5 mt-2">
					<svg
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							stroke="#000"
							stroke-linecap="round"
							stroke-linejoin="undefined"
							id="svg_1"
							y2="21.24924"
							x2="12"
							y1="2.75076"
							x1="12"
							fill="none"
						/>
					</svg>
				</div>

				{Social.map((page, idx) => (
					<div key={idx}>
						<Link href={page.link}>
							<div className="hover:scale-105 mx-5 mt-2">
								<page.icon className="" />
								{/* <div className="ml-2">{page.name}</div> */}
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

export default Navigation;
