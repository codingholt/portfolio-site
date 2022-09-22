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
		img: "https://picsum.photos/300/300",
		name: "Test1",
		link: "https://test.lol",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla",
	},
	{
		img: "https://picsum.photos/200/400",
		name: "Test2",
		link: "https://test.lol",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla",
	},
	{
		img: "https://picsum.photos/400/400",
		name: "Test3",
		link: "https://test.lol",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla",
	},
	{
		img: "https://picsum.photos/800/700",
		name: "Test4",
		link: "https://test.lol",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla",
	},
];
export { Pages, Social, ProjectData };
