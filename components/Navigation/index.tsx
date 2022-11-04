import Link from "next/link";
import { Pages, Social } from "../../data";
import { HalfMoon, Mail, ProfileCircled, SunLight } from "iconoir-react";
import { mailAtom, themeAtom } from "../../store";
import { useAtom } from "jotai";
function Navigation({}: {}) {
	const [theme, setTheme] = useAtom(themeAtom);
	const [mailModal, setMailModal] = useAtom(mailAtom);
	return (
		<>
			{/* Desktop */}
			<div className="ml-5 2xl:ring-1 shadow-md dark:shadow-white/10	 dark:bg-gray-1000 dark:text-white ring-black/10 dark:ring-white/10 rounded-md left-0 hidden xl:inline-block xl:fixed my-auto top-1/2 -translate-y-1/2">
				{Pages.map((page, idx) => (
					<div key={idx}>
						<Link href={page.link} tabIndex={idx}>
							<a>
								<div className="hover:cursor-pointer hover:bg-gray-100/50 rounded-md pl-5">
									<span className="my-1  flex py-3  pr-20 hover:scale-110 origin-left duration-500">
										<page.icon className="" />
										<div className="ml-2">{page.name}</div>
									</span>
								</div>
							</a>
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
				<div className="hover:cursor-pointer hover:bg-gray-100/50 rounded-md pl-5">
					<button
						className="my-1  w-full flex  py-1 hover:scale-105 origin-left duration-500 hover:cursor-pointer  rounded-md"
						onClick={() => setMailModal(true)}
					>
						<Mail className="hover:scale-105 mt-2" />
						<div className="m-2">Email</div>
					</button>
				</div>
				<hr />
				<div className="hover:cursor-pointer hover:bg-gray-100/50 rounded-md pl-5">
					{theme === "light" ? (
						<button
							className="my-1  w-full flex  py-1 hover:scale-105 origin-left duration-500 hover:cursor-pointer  rounded-md"
							onClick={() => setTheme("dark")}
						>
							<HalfMoon className="hover:scale-105 mt-2" />
							<div className="m-2">Dark</div>
						</button>
					) : (
						<button
							className="my-1  w-full flex  py-1 hover:scale-105 origin-left duration-500 hover:cursor-pointer  rounded-md"
							onClick={() => setTheme("light")}
						>
							<SunLight className="hover:scale-105 mt-2" />
							<div className="m-2">Light</div>
						</button>
					)}
				</div>
			</div>
			{/* Mobile */}
			<div className="xl:hidden container flex justify-end fixed inset-x-0 z-20 rounded-lg ">
				<div className="flex dark:bg-black/10 rounded-lg bg-white backdrop-blur-md	bg-opacity-0 pb-2">
					{Pages.map((page, idx) => (
						<div key={idx}>
							<Link href={page.link}>
								<a>
									<div className="hover:scale-105 duration-500 mx-2 mt-2">
										<page.icon className="" />
									</div>
								</a>
							</Link>
						</div>
					))}
					<div className="divider-y h-6 mt-2 mx-2" />

					{Social.map((page, idx) => (
						<div key={idx}>
							<a
								target="_blank"
								href={page.link}
								rel="noopener noreferrer"
							>
								<div className="hover:scale-105 mt-2 mx-2">
									<page.icon className="" />
								</div>
							</a>
						</div>
					))}
					<button onClick={() => setMailModal(true)}>
						<div className="hover:scale-105 mt-2 mx-2">
							<Mail />
						</div>
					</button>

					<div className="divider-y h-6 mt-2 mx-2" />
					{theme === "light" ? (
						<HalfMoon
							className="hover:scale-105 mt-2 mx-2"
							onClick={() => setTheme("dark")}
						/>
					) : (
						<SunLight
							className="hover:scale-105 mt-2 mx-2"
							onClick={() => setTheme("light")}
						/>
					)}
				</div>
			</div>
		</>
	);
}

export default Navigation;
