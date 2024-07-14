// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/': { ssr: false },
    '/about': { ssr: true },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  // ssr: false,
});
