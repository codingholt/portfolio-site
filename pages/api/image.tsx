import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "experimental-edge",
};
const font = fetch(
	new URL("../../assets/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
	const fontData = await font;

	try {
		const { searchParams } = req.nextUrl;

		const hasTitle = searchParams.has("title");
		// const hasSubText = searchParams.has("subtext");

		const title = hasTitle
			? searchParams.get("title")?.slice(0, 100)
			: "My default title";

		// const subtext = hasSubText
		// 	? searchParams.get("subtext")?.slice(0, 100)
		// 	: "My default title";

		return new ImageResponse(
			(
				<div
					style={{
						display: "flex",
						height: "100%",
						width: "100%",
						alignItems: "flex-start",
						justifyContent: "center",
						flexDirection: "column",
						backgroundColor: "white",

						backgroundImage:
							"radial-gradient(circle at 600px 0px, #2bd198 0%, rgba(123, 255, 232, 0) 44%)",
					}}
				>
					<div
						style={{
							padding: "5px 40px",
							width: "50px",
							textAlign: "left",
							fontFamily: "Inter",
							lineHeight: 0.95,
							left: 150,
							fontSize: 100,
							letterSpacing: -5,
						}}
					>
						{title + "."}
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "Inter",
						data: fontData,
						style: "normal",
					},
				],
			}
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
