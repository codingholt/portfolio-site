import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
// Get project data from DB

export default async function index(req: NextApiRequest, res: NextApiResponse) {
	// Get data from your database

	const session = await unstable_getServerSession(req, res, authOptions);
	if (!session) res.status(401).json({ error: "Unauthenticated user" });
	else res.status(200).json({ message: "Hello authenticated user!" });
}
