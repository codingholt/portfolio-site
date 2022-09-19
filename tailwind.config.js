/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			accent: {
				100: "#7bffe8",
				200: "#67ffd4",
				300: "#53f9c0",
				400: "#3fe5ac",
				500: "#2BD198",
				600: "#17bd84",
				700: "#03a970",
				800: "#00955c",
				900: "#008148",
				1000: "#006d34",
			},
			gray: {
				100: "#cdcdcd",
				200: "#b9b9b9",
				300: "#a5a5a5",
				400: "#919191",
				500: "#7D7D7D",
				600: "#696969",
				700: "#555555",
				800: "#414141",
				900: "#2d2d2d",
				1000: "#191919",
			},
			black: "#000",
			white: "#fff",
		},
		container: {
			center: true,
			screens: {
				sm: "356px",
				md: "556px",
				lg: "868px",
				xl: "868px",
			},
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-radial-t":
					"radial-gradient(ellipse at top,var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
