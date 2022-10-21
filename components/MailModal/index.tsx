const MailModal = () => {
	return (
		<>
			<div className="inset-0 fixed min-h-full h-screen items-center justify-center p-4 text-center overflow-y-auto bg-black bg-opacity-25" />
			<div className="overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-modal ">
				<div
					className="z-100  overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                backdrop-filter backdrop-blur-lg bg-opacity-70 overflow-visible rounded-2xl bg-white dark:bg-gray-800 dark:bg-opacity-50 p-6 text-left shadow-xl transition-all relative w-full max-w-2xl h-auto"
				>
					<h3 className="heading-2">Mailtje sturen</h3>
					hallo! ja jij daar! jij wil een mail sturen hè, nou dat kan.
					doe maar mailen naar <code>hey@svennijholt.xyz</code> geen
					spam alsjeblieft... :)
				</div>
			</div>
		</>
	);
};

export default MailModal;
