/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			sans: ["Arial", ...defaultTheme.fontFamily.sans],
		},
		extend: {
		  animation: {
			text: 'text 5s ease infinite',
			background: 'background 3s ease infinite'
		  },
		  keyframes: {
			text: {
			  '0%, 100%': {
				'background-size': '200% 200%',
				'background-position': 'left center',
			  },
			  '50%': {
				'background-size': '200% 200%',
				'background-position': 'right center',
			  },
			  
			},
			background: {
				'0%, 100%': {
				  'background-size': '200% 200%',
				  'background-position': 'left center',
				},
				'50%': {
				  'background-size': '200% 200%',
				  'background-position': 'right center',
				},
				
			  },
		  },
		}
	  },
	daisyui: {
		themes:["garden","dark"]
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
