// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3005
  },
  modules: ["@nuxt/content"],
  content: {
    experimental: {
      search: true
    }
  },
  css: ['~/assets/css/_base.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_import.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        { defer: true, src:"https://info.bitcoin.design/script.js", "data-website-id": "3d680e56-985f-4c27-a10c-d8007b064649" }
      ]
    }
  }
})