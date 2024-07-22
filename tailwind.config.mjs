import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			black: {
				DEFAULT: colors.black,
				light: colors.black["300"],
			},
			white: colors.white,
			primary: {
				DEFAULT: colors.purple["600"],
				light: colors.purple["200"],
				dark: colors.purple["800"],
			},
			accent: {
				DEFAULT: colors.amber["500"],
				light: colors.amber["200"],
				dark: colors.amber["900"],
			},
		},
		extend: {},
	},
	plugins: [
			function ({ addComponents, theme }) {
				addComponents({
					'.text-primary': {
						color: theme('colors.primary.DEFAULT'),
					},
					'.text-accent': {
						color: theme('colors.accent.DEFAULT'),
					},
					'.bg-accent': {
						backgroundColor: theme('colors.accent.DEFAULT'),
					},
					'.border-primary': {
						borderColor: theme('colors.primary.DEFAULT'),
					},
					'.border-accent': {
						borderColor: theme('colors.accent.DEFAULT'),
					},
					'.text-gradient': {
						background: "linear-gradient(to right, theme('colors.primary.DEFAULT'), theme('colors.accent.DEFAULT'))",
						backgroundClip: "text",
						"-webkit-text-fill-color": "transparent",
					},
					'.bg-gradient': {
						background: "linear-gradient(to right, theme('colors.primary.DEFAULT'), theme('colors.accent.DEFAULT'))",
					},
				});
			},
	],
}
