import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
    alias: {
      // added for AWS-SDK with vite
      "./runtimeConfig": "./runtimeConfig.browser"
    },
  },
})
