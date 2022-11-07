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
				className="inset-0 z-50 fixed min-h-full h-screen items-center justify-center p-4 text-center overflow-y-auto bg-black bg-opacity-50"
				onClick={() => setMailModal(false)}
			></div>

			<div
				className="z-50 overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  fixed inset-0 h-modal
                  w-full max-w-2xl h-60 backdrop-filter backdrop-blur-lg bg-opacity-80 overflow-visible rounded-2xl bg-white dark:bg-gray-800 dark:bg-opacity-50 p-6 text-left shadow-xl transition-all dark:text-white"
			>
				<h3 className="heading-2">Mail</h3>
				{router.locale === "nl-NL" ? (
					<p>
						Je kan een mail sturen naar
						<code className="font-mono bg-gray-500/10 p-0.5 rounded-sm shadow-sm">
							contact@svennijholt.xyz
						</code>{" "}
						om contact met mij op te nemen, of klik op de
						onderstaande knop om rechtstreeks naar uw favoriete
						e-mailtoepassing te gaan. Ik probeer zo snel mogelijk te
						reageren{" "}
					</p>
				) : (
					<p>
						You can send an e-mail to
						<code className="font-mono bg-gray-500/10 p-0.5 rounded-sm shadow-sm">
							contact@svennijholt.xyz
						</code>{" "}
						to get in touch with me, or click the button below to go
						directly to your favorite email application. I&apos;ll
						try to respond as fast as possible.
					</p>
				)}
				<Button
					to="mailto:hey@svennijholt.xyz"
					buttonText="Open Email"
					extraStyle="bottom-0 mb-6"
				/>
			</div>
		</>
	);
};

export default MailModal;
