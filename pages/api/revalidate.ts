import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await unstable_getServerSession(req, res, authOptions);

	//Check if user is authenthicated
	if (!session) res.status(401).json({ error: "Unauthenticated user" });

	try {
		// this should be the actual path not a rewritten path
		// e.g. for "/blog/[slug]" this should be "/blog/post-1"
		await res.revalidate("/projects").catch((err) => console.error(err));

		return res.json({ revalidated: true });
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return res.status(500).send("Error revalidating");
	}
}
export const config = {
	api: {
		bodyParser: false,
	},
};
