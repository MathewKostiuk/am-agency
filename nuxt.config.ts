import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  vite: {
    plugins: [
      svgLoader(),
    ]
  },
  runtimeConfig: {
    gmailAddress: process.env.GMAIL_ADDRESS,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
      }
    },
  },
})
