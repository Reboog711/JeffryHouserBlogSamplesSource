import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig({
	plugins: [ tailwindcss(), sveltekit(), svelteTesting()],
	optimizeDeps: {
		include: ['flowbite-svelte']
	},
	ssr: {
		noExternal: ['flowbite-svelte']
	},
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: true,
//                        name: "chromium", // borrowed from https://youtrack.jetbrains.com/issue/WEB-68768/Vitest-Browser-Mode-Debugging-Doesnt-Work
						provider: 'playwright',
						instances: [
                            {
                                browser: 'chromium',
                                headless: false,
/*
                                launchOptions: {
                                    args: ["--remote-debugging-port=9229"],
                                },
*/
                                args: ['--remote-debugging-port=9229']
/*
                                launchOptions: {
                                    args: ["--remote-debugging-port=9229"],
                                }
*/
//                                args: ["--remote-debugging-port=9222"]
                            }
                        ],
/*
                        providerOptions: {
                            launch: {
                                args: ["--remote-debugging-port=9222"],
                            },
                        },
*/
                    },
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			} //,
//			{
//				extends: './vite.config.ts',
//				test: {
//					name: 'server',
//					environment: 'node',
//					include: ['src/**/*.{test,spec}.{js,ts}'],
//					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
//				}
//			}
		]


/*
		globals: true,
//		environment: "jsdom",
		environment: "browser",
		setupFiles: ['./vitest-setup-client.ts'],
		browser: {
			enabled: true,
			provider: 'playwright',
			instances: [{ browser: 'chromium', headless: true }]
		},
*/
/*
		include: ['src/!**!/!*.svelte.{test,spec}.{js,ts}'],
		exclude: ['src/lib/server/!**'],
*/

	}
});
