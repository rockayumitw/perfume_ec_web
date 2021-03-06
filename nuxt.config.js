const webpack = require('webpack')
module.exports = {
  mode: 'universal',
  env: {
    // /perfume_ec_web/dist/ compiler
    // title: process.env.npm_package_name || ''
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  router:{
    base :"/perfume_ec_web/dist" 
  },
  head: {
    // title: process.env.npm_package_name || '',
    title: '香水電商',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#916019' },
  /*
  ** Global CSS
  */
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    { src:'~assets/scss/app.scss'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/main', ssr: false },
    { src: '~plugins/i18n'},
    { src: "~plugins/aos", ssr: false },
    { src: '~plugins/http', ssr: false}
  // { src: '~/plugins/mixins/header', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'vue-sweetalert2/nuxt',
    'nuxt-fontawesome',
    'vue-social-sharing/nuxt',
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: true,
    extend (config, ctx) {
    },
    vendor: ['aos'],
    transpile: ['TweenMax', 'TimelineMax'],
    plugins:[
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ]
  },
  fontawesome: {
    // icon 的標籤使用 <fa>，這邊不設定就會依照 plugin 裡的設定<font-awesome-icon>
    component: 'fa',
    imports: [
      // 引入 fas 所有的icon
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set:'@fortawesome/free-regular-svg-icons',
        icons:['far']
      },
      {
        set:'@fortawesome/free-brands-svg-icons',
        icons:['fab']
      },
    ]
  }
}
