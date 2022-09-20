import Navigation from "../Navigation";

function Container({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<aside className="relative overflow-y-auto">
				<Navigation />
			</aside>
			<div className="container mx-auto relative">
				<span className="min-w-fit inset-0 absolute h-20 md:h-56 bg-gradient-radial-t from-accent-500 via-accent-100/0 to-transparent 	z-0" />
				<div className="relative z-10 top-32">{children}</div>
			</div>
		</div>
	);
}

export default Container;
