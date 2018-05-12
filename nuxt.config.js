module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'world',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'keywords', content: '个人网站' },
      { hid: 'description', name: 'description', content: '穷逼个人网站' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ],
  },
  css:[
    '~/assets/fonts/iconfont.css',
    '~/assets/styles/index.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    filenames: {
      app: 'app.[chunkhash].js'
    },
    vendor: [
      'babel-polyfill',
      '~/plugins/utils.js'
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    styleResources: {
      scss: ['~/assets/styles/variable.scss','~/assets/styles/mixin.scss'],
      options: {}
    }
  },
  plugins: [
    '~/plugins/utils.js'
  ]
}
