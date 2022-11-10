import Navigation from "../Navigation";
import Footer from "../Footer";
function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full">
			<div className="dark:bg-black dark:text-white duration-1000 overflow-y-auto relative h-screen flex flex-col">
				<Navigation />
				<div className="container mx-auto relative h-screen flex-1">
					<span className="min-w-fit inset-0 absolute h-20 md:h-56 bg-gradient-radial-t from-accent-500 via-accent-100/0 to-transparent 	z-0" />
					<div className=" z-10 absolute pb-8 max-w-full top-[10%] md:top-1/4 xl:top-1/4">
						{children}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Container;
