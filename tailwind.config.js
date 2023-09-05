/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				spaceGrotesk: ['Space Grotesk', 'sans-serif'],
				['spaceGrotesk-bold']: ['Space Grotesk Bold']
			}
		}
	},
	plugins: []
};
