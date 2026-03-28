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

// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-27',
//   devtools: { enabled: true },
  
//   modules: ['@nuxtjs/tailwindcss'],
  

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
  
//   tailwindcss: {
//     // Configurer explicitement les chemins
//     configPath: 'tailwind.config.js',
//     cssPath: '~/assets/css/main.css',
//   },
// })

export default defineNuxtConfig({
  compatibilityDate: '2024-11-27',
  devtools: { enabled: true },
  
  // Activation de Nuxt 4
  future: {
    compatibilityVersion: 4,
  },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  // Dossier source pour Nuxt 4
  srcDir: 'app/',
  
  app: {
    head: {
      title: 'Andry Ny Aina Rakotonirina - Développeur Backend & UI/UX Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio de développeur backend et UI/UX designer spécialisé dans les applications robustes et performantes' },
        { name: 'author', content: 'Andry Ny Aina Rakotonirina' },
        { name: 'keywords', content: 'développeur backend, UI/UX designer, portfolio, Node.js, Python, Nuxt, Tailwind CSS' },
        // Open Graph pour les réseaux sociaux
        { property: 'og:title', content: 'Andry Ny Aina Rakotonirina - Développeur Backend & UI/UX Designer' },
        { property: 'og:description', content: 'Découvrez mon portfolio de développeur backend et UI/UX designer' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/og-image.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Andry Ny Aina Rakotonirina - Développeur Backend & UI/UX Designer' },
        { name: 'twitter:description', content: 'Découvrez mon portfolio de développeur backend et UI/UX designer' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap', rel: 'stylesheet' }
      ],
      // // Favicon
      // link: [
      //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // ]
    }
  },
  
  css: ['~/assets/css/main.css'],
  
  tailwindcss: {
    configPath: 'tailwind.config.js',
    cssPath: '~/assets/css/main.css',
  },
  
  // Optimisations pour Vercel
  nitro: {
    preset: 'vercel',
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      // Cache les assets statiques pour de meilleures performances
      '/**': { headers: { 'Cache-Control': 'public, max-age=3600' } },
      '/images/**': { headers: { 'Cache-Control': 'public, max-age=86400' } }
    }
  },
  
  // Optimisations de build
  build: {
    transpile: ['@iconify/vue', 'swiper'],
  },
  
  // Optimisation des performances
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    },
    optimizeDeps: {
      include: ['@iconify/vue', 'swiper']
    }
  },
  
  // Génération du site (pour le déploiement statique)
  ssr: true,
  
  // Compresser les assets
  appConfig: {
    nuxt: {
      buildId: 'production'
    }
  },
  
  // Pour les images statiques
  experimental: {
    // Permet d'optimiser les assets
    inlineSSRStyles: false
  }
})