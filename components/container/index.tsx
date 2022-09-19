function Container({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="container mx-auto">
				<span className="min-w-fit flex h-48 bg-gradient-radial-t from-accent-500 via-accent-100/0 to-transparent z-0" />
				<div className="">{children}</div>
			</div>
		</>
	);
}

export default Container;
