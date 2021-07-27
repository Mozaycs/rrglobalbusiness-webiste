module.exports = {
  siteMetadata: {
    title: 'TechRD',
    author: 'TechRD',
    description: 'YOUR VISION, WE INNOVATE & AUTOMATE',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [`Posts`],
        queryLimit: 1000
      }
    },
    'gatsby-plugin-sass',
  ],
}
