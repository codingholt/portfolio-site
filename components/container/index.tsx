import Navigation from "../Navigation";

function Container({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Navigation />
			<div className="container mx-auto relative h-screen">
				<span className="min-w-fit inset-0 absolute h-20 md:h-56 bg-gradient-radial-t from-accent-500 via-accent-100/0 to-transparent 	z-0" />
				<div className=" z-10 absolute top-1/4">{children}</div>
			</div>
		</div>
	);
}

export default Container;
