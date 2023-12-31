// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
  ],

  build: {
    extend(config, { isDev, isClient }) {
      // Modify the Webpack configuration
      if (!isDev) {
        // Disable the fallback for the process module
        config.resolve.fallback = {
          ...config.resolve.fallback,
          "process": false
        };
      }
    }
  },
  
  app: {
    head: {
      title: 'STRANGE BEASTS | ESHOP',
      meta: [
        {name: 'description', content: 'Strange Beasts unique stickers eshop'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Roboto:wght@400;500;700;900&display=swap'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'},
      ]
    }
  }
})
