import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET":
			// Get data from your database
			break;
		case "PUT":
			// Update or create data in your database
			break;
		case "DELETE":
		// DELETE WITH ID
		case "UPDATE":
		// Update with ID
		default:
			res.setHeader("Allow", ["GET", "PUT"]);
			res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
