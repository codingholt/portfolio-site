import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma, projects } from "@prisma/client";
import { IProject } from "../../../../types";
import { fileTypeFromBuffer } from "file-type";
import multiparty from "multiparty";
import util from "util";
const prisma = new PrismaClient();
function toArrayBuffer(buffer: Buffer) {
	var ab = new ArrayBuffer(buffer.length);
	var view = new Uint8Array(ab);
	for (var i = 0; i < buffer.length; ++i) {
		view[i] = buffer[i];
	}
	return ab;
}
export default async function index(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;
	// Get data from your database

	const project = await prisma.projects.findUnique({
		where: {
			id: +id!,
		},
		select: {
			name: true,
			description: true,
			link: true,
			id: true,
		},
	});

	res.status(200).send("bye");
}
export const config = {
	api: {
		responseLimit: "4mb",
		bodyParser: false,
	},
};
