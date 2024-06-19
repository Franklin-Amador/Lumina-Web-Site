/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// ? Paleta de colores
			colors: {
				'custom-1' : '#071739',
				'custom-2' : '#4B6382',
				'custom-3' : '#A4B5C4',
				'custom-4' : '#CDD5DB',
				'custom-5' : '#A68868',
				'custom-6' : '#E3C39D',
			}			
		},
	},
	plugins: [],
}
