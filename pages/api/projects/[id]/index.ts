import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma, projects } from "@prisma/client";
import { IProject } from "../../../../types";
import { authOptions } from "../../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
const prisma = new PrismaClient();

export default async function index(req: NextApiRequest, res: NextApiResponse) {
	const session = await unstable_getServerSession(req, res, authOptions);
	const { id } = req.query;
	// Get data from your database
	console.log(req.body);
	switch (req.method) {
		case "GET":
			const getProject = await prisma.projects
				.findUnique({
					where: {
						id: +id!,
					},
				})
				.catch((e) =>
					res.status(500).send(`Internal Sever Error (500): ${e}`)
				);
			res.status(200).send(getProject);
			break;

		case "PUT":
			if (!session)
				res.status(401).json({ error: "Unauthenticated user" });
			const updateProject = await prisma.projects
				.update({
					data: {
						name: req.body.name,
						description: req.body.description,
						link: req.body.link,
						image: req.body.image,
					},
					where: {
						id: +id!,
					},
				})
				.catch((e) =>
					res.status(500).send(`Internal Sever Error (500): ${e}`)
				);
			res.status(200).send({
				succes: true,
				new_database_item: {
					id: updateProject?.id,
					name: updateProject?.name,
					description: updateProject?.description,
					link: updateProject?.link,
					img_url: updateProject?.image,
				},
			});
			break;
	}

	res.status(200).send("bye");
}
