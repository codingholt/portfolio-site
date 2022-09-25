import "../styles/globals.css";
import type { AppProps } from "next/app";
import { themeAtom } from "../store";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

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
		<div className={theme}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
