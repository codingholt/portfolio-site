function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto rounded-full bg-gradient-radial-to-r from-accent-500 to-accent-[41DFE9]">
			{children}
		</div>
	);
}

export default Container;
