function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="">
			<div className="container mx-auto relative">
				<span className="min-w-fit inset-0 absolute h-20 md:h-56 bg-gradient-radial-t from-accent-500 via-accent-100/0 to-transparent z-0" />
				<div className="relative z-10 top-20">{children}</div>
			</div>
		</div>
	);
}

export default Container;
