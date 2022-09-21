import "../styles/globals.css";
import type { AppProps } from "next/app";
import { themeAtom } from "../store";
import { useAtom } from "jotai";

function MyApp({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useAtom(themeAtom);
	return (
		<div className={theme}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
