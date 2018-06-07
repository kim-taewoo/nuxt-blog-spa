const pkg = require('./package')
const bodyParser = require('body-parser')
const axios = require('axios')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'TW Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Web blog' },
      { name: 'theme-color', content: 'black'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Oswald"},
      { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},
      { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Dosis"},
      { rel: 'stylesheet', href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'white', height:'4px', duration: 5000 },
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#fa923f'
  // }

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  // axios: {
  //   baseURL: process.env.BASE_URL || 'https://nuxt-blog-tw.firebaseio.com',
  //   credentilas: false
  // }
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  router: {
    middleware: 'log'
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-tw.firebaseio.com',
    fbAPI: "AIzaSyBLsbctYMGoGJj6L9u-EM4KsUF9Mv8ZUlk"
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  generate: {
    routes: function() {
      return axios.get('https://nuxt-blog-tw.firebaseio.com/posts.json')
        .then(res => {
          const routes =[];
          for (const key in res.data) {
            routes.push({
              route: '/posts/' +key,
              payload: {postData: res.data[key]}
            });
          }
          return routes;
        })
    }
  }
}
