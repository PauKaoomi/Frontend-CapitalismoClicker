// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx'
import astroExpressiveCode from 'astro-expressive-code'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		astroExpressiveCode(),
		mdx(),
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Index',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Index', slug: 'scr/pages/index.mdx' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
