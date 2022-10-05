import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { PrismaClient, Prisma, projects } from "@prisma/client";
import { IProject } from "../../../types";
import { link, read } from "fs";
const prisma = new PrismaClient();
// Get project data from DB
interface ExtendedNextApiRequest extends NextApiRequest {
	body: IProject;
}
export default async function index(
	req: ExtendedNextApiRequest,
	res: NextApiResponse
) {
	// Get data from your database
	const session = await unstable_getServerSession(req, res, authOptions);
	if (!session) res.status(401).json({ error: "Unauthenticated user" });

	console.log("server!!!");
	switch (req.method) {
		case "GET":
			// Get data from your database
			const projects = await prisma.projects.findMany();
			console.log(projects);
			break;
		case "POST":
			// Update or create data in your database

			const img = Buffer.from(req.body.img, "base64");
			const project = await prisma.projects.create({
				data: {
					name: req.body.name,
					description: req.body.description,
					link: req.body.link,
					image: img,
				},
			});
			console.log("succes?!");
			res.status(200).send(`Succesfull put ${project}`);
			break;
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
export const config = {
	api: {
		responseLimit: false,
	},
};
