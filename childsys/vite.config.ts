import vue from '@vitejs/plugin-vue'
import path from 'path'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  envDir: path.resolve(__dirname),
	plugins: [
		vue(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					resolveIcons: true,
					importStyle: 'less',
				}),
			],
			dirs: ['src/**/*'],
			extensions: ['vue'],
			dts: 'src/globalComponents.d.ts',
			directoryAsNamespace: true,
		}),
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
  server: {
    port: 3001,
  },
})
