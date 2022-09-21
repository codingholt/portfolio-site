import Link from "next/link";
import { Pages, Social } from "../../data";
import { HalfMoon, MoonSat, ProfileCircled, SunLight } from "iconoir-react";
import { themeAtom } from "../../store";
import { useAtom } from "jotai";
function Navigation({}: {}) {
	const [theme, setTheme] = useAtom(themeAtom);

	return (
		<>
			{/* Desktop */}
			<div className="ml-5 2xl:ring-1 shadow-md ring-black/10 rounded-md left-0 hidden 2xl:inline-block 2xl:fixed my-auto top-1/2 -translate-y-1/2">
				<Link href="/">
					<div className="my-1 rounded-md flex py-3 hover:cursor-pointer pr-20 hover:scale-105 duration-500 hover:bg-gray-100/50 pl-5">
						<ProfileCircled />
						<div className="ml-2">Sven Nijholt</div>
					</div>
				</Link>
				<hr />
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
				<hr />
				<div className="divder-x w-18 h-1"></div>
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
			<div className="2xl:hidden container mx-auto flex justify-between fixed inset-0 z-10">
				{Pages.map((page, idx) => (
					<div key={idx}>
						<Link href={page.link}>
							<div className="hover:scale-105 duration-500 mt-2">
								<page.icon className="" />
								{/* <div className="ml-2">{page.name}</div> */}
							</div>
						</Link>
					</div>
				))}
				<div className="divider-y h-6 mt-2" />

				{Social.map((page, idx) => (
					<div key={idx}>
						<Link href={page.link}>
							<div className="hover:scale-105 mt-2">
								<page.icon className="" />
							</div>
						</Link>
					</div>
				))}
				<div className="divider-y h-6 mt-2" />
				{theme === "light" ? (
					<HalfMoon
						className="hover:scale-105 mt-2"
						onClick={() => setTheme("dark")}
					/>
				) : (
					<SunLight
						className="hover:scale-105 mt-2"
						onClick={() => setTheme("light")}
					/>
				)}
			</div>
		</>
	);
}

export default Navigation;
