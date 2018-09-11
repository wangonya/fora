module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fora',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Where Seventh-day Adventist Christians share ideas and help each other grow.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // buefy module
  modules: [
    // Simple usage
    'nuxt-buefy'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3CA8F7' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

