import {
	GitHub,
	HomeSimpleDoor,
	LightBulbOn,
	Mail,
	Twitter,
} from "iconoir-react";
import { IPage } from "../types";

const Pages: IPage[] = [
	{
		icon: HomeSimpleDoor,
		name: "Home",
		link: "/",
	},
	{
		icon: LightBulbOn,
		name: "Projects",
		link: "/projects",
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
];

const IntroText = {
	en: "I am a software developer with a passion for all things computer related. I study Open-ICT at the Hogeschool Utrecht. I've known for a number of years that I want to do something with programming, I think it's very nice to make something and see the result. I like to constantly learn new things and expand my skills. On this website you will find information about the projects I have worked on. Feel free to take a look around! If you have any questions or want to know more, please don't hesitate to contact me",
	nl: "Mijn naam is Sven Nijholt en ik ben een softwareontwikkelaar met een passie voor alles wat met computers te maken heeft. Ik studeer Open-ICT aan de Hogeschool Utrecht. Een aantal jaar weet ik al dat ik iets wil doen met programmeren, ik vind het erg mooi om iets te maken en daar het resultaat van te zien.  Ik vind het leuk om constant nieuwe dingen  te leren en mijn vaardigheden uit te bereiden. Op deze website vindt u informatie over de projecten waaraan ik heb gewerkt. Kijk gerust eens rond! Heb je vragen of wil je meer weten, neem dan gerust contact met me op",
};

export { Pages, Social, IntroText };
