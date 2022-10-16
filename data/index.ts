import {
	GitHub,
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

const IntroText =
	"Ik ben een softwareontwikkelaar met een passie voor alles wat met computers te maken heeft. Ik studeer Open-ICT aan de Hogeschool Utrecht. Een aantal jaar weet ik al dat ik iets wil doen met programmeren, ik vind het erg mooi om iets te maken en daar het resultaat van te zien.  Ik vind het leuk om constant nieuwe dingen  te leren en mijn vaardigheden uit te bereiden. Op deze website vindt u informatie over de projecten waaraan ik heb gewerkt. Kijk gerust eens rond! Heb je vragen of wil je meer weten, neem dan gerust contact met me op";

const ProjectData: IProject[] = [
	{
		image: "https://picsum.photos/300/300",
		name: "Test1",
		link: "https://test.lol/kaakakakpeopeop",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla",
	},
	{
		image: "https://picsum.photos/200/400",
		name: "Test2",
		link: "https://test.lol/",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla",
	},
	{
		image: "https://picsum.photos/400/400",
		name: "Test3",
		link: "https://test.lol/",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla",
	},
	{
		image: "https://picsum.photos/800/700",
		name: "Test4",
		link: "https://test.lol",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla",
	},
];
export { Pages, Social, ProjectData, IntroText };
