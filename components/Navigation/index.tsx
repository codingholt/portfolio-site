import Link from "next/link";
import { Pages, Social } from "../../data";
import { HalfMoon, ProfileCircled, SunLight } from "iconoir-react";
import { themeAtom } from "../../store";
import { useAtom } from "jotai";
function Navigation({}: {}) {
	const [theme, setTheme] = useAtom(themeAtom);

	return (
		<>
			{/* Desktop */}
			<div className="ml-5 2xl:ring-1 shadow-md dark:shadow-white/10	 dark:bg-gray-1000 dark:text-white ring-black/10 dark:ring-white/10 rounded-md left-0 hidden xl:inline-block xl:fixed my-auto top-1/2 -translate-y-1/2">
				<Link href="/">
					<div className="my-1 rounded-md flex py-3 hover:cursor-pointer pr-20 hover:scale-105 duration-500 hover:bg-gray-100/50 pl-5">
						<ProfileCircled />
						<div className="ml-2">Sven</div>
					</div>
				</Link>
				<hr />
				{Pages.map((page, idx) => (
					<div key={idx}>
						<Link href={page.link} tabIndex={idx}>
							<div className="hover:cursor-pointer hover:bg-gray-100/50 rounded-md pl-5">
								<span className="my-1  flex py-3  pr-20 hover:scale-110 origin-left duration-500">
									<page.icon className="" />
									<div className="ml-2">{page.name}</div>
								</span>
							</div>
						</Link>
					</div>
				))}
				<hr />
				{Social.map((page, idx) => (
					<div key={idx}>
						<a
							target="_blank"
							href={page.link}
							rel="noopener noreferrer"
						>
							<div className="hover:cursor-pointer hover:bg-gray-100/50 rounded-md pl-5">
								<span className="my-1  flex py-3  pr-20 hover:scale-105 origin-left duration-500">
									<page.icon className="" />
									<div className="ml-2">{page.name}</div>
								</span>
							</div>
						</a>
					</div>
				))}
				<hr />

				{theme === "light" ? (
					<div
						className="my-1 rounded-md flex py-3 hover:cursor-pointer pr-20 hover:scale-105 duration-500 hover:bg-gray-100/50 pl-5"
						onClick={() => setTheme("dark")}
					>
						<HalfMoon className="hover:scale-105 mt-2" />
						<div className="m-2">Dark</div>
					</div>
				) : (
					<div
						className="my-1 rounded-md flex py-3 hover:cursor-pointer pr-20 hover:scale-105 duration-500 hover:bg-gray-100/50 pl-5"
						onClick={() => setTheme("light")}
					>
						<SunLight className="hover:scale-105 mt-2" />
						<div className="m-2">Light</div>
					</div>
				)}
			</div>
			{/* Mobile */}
			<div className="xl:hidden container mx-auto flex justify-between fixed inset-0 z-10">
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
						<a
							target="_blank"
							href={page.link}
							rel="noopener noreferrer"
						>
							<div className="hover:scale-105 mt-2">
								<page.icon className="" />
							</div>
						</a>
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
