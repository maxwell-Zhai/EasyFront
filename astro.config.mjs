import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
    site: 'https://maxwell-Zhai.github.io',
    base: '/EasyFront',
    integrations: [
		starlight({
			title: 'EasyFront',
			social: {
				github: 'https://github.com/maxwell-Zhai/EasyFront_Code',
			},
			sidebar: [
				{
					label: '开始使用',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'so Easy!', slug: 'guides/example' },
					],
				},
			],
		}),
	],
});
