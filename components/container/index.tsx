import Navigation from "../Navigation";

function Container({
	color,
	children,
}: {
	color: string;
	children: React.ReactNode;
}) {
	return (
		<div className="dark:bg-black h-full dark:text-white duration-1000 overflow-y-auto">
			<Navigation />
			<div className="container mx-auto  relative h-screen">
				<span
					className={`min-w-fit inset-0 absolute h-20 md:h-56 bg-gradient-radial-t from-${color}-500 via-${color}-100/0 to-transparent 	z-0`}
				/>
				<div className=" z-10 absolute max-w-full top-1/4">
					{children}
				</div>
			</div>
		</div>
	);
}

export default Container;
