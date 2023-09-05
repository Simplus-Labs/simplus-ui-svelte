// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				gray: colors.gray,
				emerald: colors.emerald,
				indigo: colors.indigo,
				yellow: colors.yellow,
				red: colors.red,
				orange: {
					DEFAULT: '#FE6D38',
					...colors.orange
				},
				green: {
					DEFAULT: '#00C673',
					...colors.green
				}
			},
			fontFamily: {
				spaceGrotesk: ['Space Grotesk', 'sans-serif'],
				['spaceGrotesk-bold']: ['Space Grotesk Bold']
			}
		}
	},
	plugins: []
};
