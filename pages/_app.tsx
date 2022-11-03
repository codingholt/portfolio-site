import "../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";
import { themeAtom, mailAtom } from "../store";
import { useAtom } from "jotai";
import { useEffect } from "react";

import MailModal from "../components/MailModal";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
type AppProps<P = any> = {
	pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

function MyApp({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useAtom(themeAtom);
	const [mailModal, setMailModal] = useAtom(mailAtom);
	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	return (
		<SessionProvider session={pageProps.session}>
			<Head>
				<link href="favicon.ico" type="image/x-icon" />
			</Head>
			<div className={theme}>
				<div className="dark:bg-black">
					<Component {...pageProps} />
					{mailModal ? <MailModal /> : null}
				</div>
			</div>
		</SessionProvider>
	);
}
export default MyApp;
