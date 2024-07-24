// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
  }
})