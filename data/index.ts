import { link } from "fs";
import {
	EmojiBall,
	Flask,
	GitHub,
	GitHubOutline,
	HomeSimpleDoor,
	LightBulbOn,
	Mail,
	Twitter,
} from "iconoir-react";
import { IPage, IProject } from "../types";

const Pages: IPage[] = [
	{
		icon: HomeSimpleDoor,
		name: "Home",
		link: "/",
	},
	{
		icon: LightBulbOn,
		name: "Projecten",
		link: "/projecten",
	},
	{
		icon: Flask,
		name: "Experimenten",
		link: "/experimenten",
	},
];

const Social: IPage[] = [
	{
		icon: GitHub,
		name: "Github",
		link: "https://github.com/codingholt",
	},
	{
		icon: Twitter,
		name: "Twitter",
		link: "https://twitter.com/codingholt",
	},
	{
		icon: Mail,
		name: "email",
		link: "mailto:hey@svennijholt.xyz",
	},
];

const ProjectData: IProject[] = [
	{
		img: "../example/img.png",
		name: "Test1",
		link: "https://test.lol",
		description: "lorem ipsum ahahahahahahahahhaahha",
	},
];
export { Pages, Social, ProjectData };
