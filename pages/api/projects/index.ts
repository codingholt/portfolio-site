import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { Prisma, PrismaClient } from "@prisma/client";
import { IProject } from "../../../types";

const prisma = new PrismaClient();
interface ExtendedNextApiRequest extends NextApiRequest {
	body: any;
}

export default async function index(
	req: ExtendedNextApiRequest,
	res: NextApiResponse
) {
	const session = await unstable_getServerSession(req, res, authOptions);

	switch (req.method) {
		case "GET":
			const projects = await prisma.projects.findMany();
			res.status(200).send({
				succes: true,
				database_items: projects,
			});
			break;
		case "POST":
			if (!session) {
				res.status(401).json({ error: "Unauthenticated user" });
				return;
			}

			const project = await prisma.projects.create({
				data: {
					name: req.body.name,
					description: req.body.description,
					link: req.body.link,
					image: req.body.image,
				},
			});
			res.status(200).send({
				succes: true,
				new_database_item: {
					id: project.id,
					name: project.name,
					description: project.description,
					link: project.link,
					img_url: project.image,
				},
			});
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
