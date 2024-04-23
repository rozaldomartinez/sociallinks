import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
  theme: {
    	extend: {
      		backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      		},
			colors: {
				mentor:{
					grey: '#333333',
					darkgrey: '#1f1f1f',
					green: '#c5f82a',
					offblack: '#141414',
				},
			},
    	},
  	},
  plugins: [],
};
export default config;
