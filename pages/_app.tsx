import "../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";
import { themeAtom } from "../store";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
type AppProps<P = any> = {
	pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

function MyApp({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useAtom(themeAtom);

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
				</div>
			</div>
		</SessionProvider>
	);
}
export default MyApp;
