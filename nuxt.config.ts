// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true }
// })

// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-27',
//   devtools: { enabled: true },
  
//   modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  
//   colorMode: {
//     classSuffix: '',
//     preference: 'dark',
//     fallback: 'dark',
//     hid: 'nuxt-color-mode-script',
//     globalName: '__NUXT_COLOR_MODE__',
//     componentName: 'ColorScheme',
//     classPrefix: '',
//     storageKey: 'nuxt-color-mode'
//   },
  
//   app: {
//     head: {
//       title: 'Mon Portfolio - Développeur Web Backend',
//       meta: [
//         { charset: 'utf-8' },
//         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//         { name: 'description', content: 'Portfolio de développeur web backend' }
//       ],
//       link: [
//         { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
//         { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
//         { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap', rel: 'stylesheet' }
//       ]
//     }
//   },
  
//   css: ['~/assets/css/main.css'],
  
//   postcss: {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//   },
// })

export default defineNuxtConfig({
  compatibilityDate: '2024-11-27',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  

  app: {
    head: {
      title: 'Mon Portfolio - Développeur Web Backend',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio de développeur web backend' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap', rel: 'stylesheet' }
      ]
    }
  },
  
  tailwindcss: {
    // Configurer explicitement les chemins
    configPath: 'tailwind.config.js',
    cssPath: '~/assets/css/main.css',
  },
})