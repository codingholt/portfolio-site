import { useAtom } from "jotai";
import { mailAtom } from "../../store";
import { useRouter } from "next/router";
import Button from "../Button";
const MailModal = () => {
	const [mailModal, setMailModal] = useAtom(mailAtom);
	const router = useRouter();
	return (
		<>
			<div
				className="inset-0 fixed min-h-full h-screen items-center justify-center p-4 text-center overflow-y-auto bg-black bg-opacity-50"
				onClick={() => setMailModal(false)}
			></div>

			<div
				className="z-50 overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  fixed inset-0 h-modal
                  w-full max-w-2xl h-60 backdrop-filter backdrop-blur-lg bg-opacity-80 overflow-visible rounded-2xl bg-white dark:bg-gray-800 dark:bg-opacity-50 p-6 text-left shadow-xl transition-all dark:text-white"
			>
				<h3 className="heading-2">Mail</h3>
				<p>
					Je kan een email sturen naar
					<code className="font-mono bg-gray/30 p-1 rounded-sm shadow-sm">
						hey@svennijholt.xyz
					</code>{" "}
					om contact met mij op te nemen, of klik op de onderstaande
					knop om rechtstreeks naar uw favoriete e-mailtoepassing te
					gaan. geen spam alsjeblieft... :){" "}
				</p>
				<Button
					to="mailto:hey@svennijholt.xyz"
					buttonText="Open Mail"
					extraStyle="bottom-0 mb-6"
				/>

				{/* <button
					className="p-3 mt-4 bg-white/6 dark:bg-black rounded-md shadow-md border"
					onClick={() => router.push("mailto:hey@svennijholt.xyz")}
				>
					Open Mail
				</button> */}
			</div>
		</>
	);
};

export default MailModal;
