import { Flask, HomeSimpleDoor, LightBulbOn } from "iconoir-react";
import { IPage } from "../types";

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

export default Pages;
