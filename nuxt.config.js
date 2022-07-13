import colors from 'vuetify/es5/util/colors'

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - truco-stars-dev',
    title: 'Truco Stars',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-ts.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      }
    ]
  },
  server: {
    port: 3000 // default: 3000
  },
  router: {
    linkPrefetchedClass: 'nuxt-link-prefetched'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/variables.scss',
    '~/assets/scss/global.scss',
    '~/assets/scss/vueformulate-custom-styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' },
    { src: './plugins/vuelidate.js', mode: 'client' },
    { src: '~/plugins/vuex-persist.js', mode: 'client' },
    '~/plugins/vue-tel-input-vuetify',
    '~/plugins/vue-apexcharts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@braid/vue-formulate/nuxt',
    '@nuxt/components'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake:true,
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      disable:true
      // light:true,
      // themes: {
        // dark: {
        //   primary: colors.blue.darken2,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3
        // }
      // }
    },
    defaultAssets: {
      font: {
        family: 'Mulish',
        size:'10px',
        color:'#3D445E'
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  formulate: {
    configPath: '~/formulate.config.js'
  }
}
