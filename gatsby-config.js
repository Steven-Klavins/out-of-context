module.exports = {
  siteMetadata: {
    title: `Out Of Context`,
    description: `Out Of Context's website.`,
    author: `Steven Klavins`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `outofcontext257208211.wordpress.com/`,
        protocol: `https`,
        hostingWPCOM: true,
      },
    },
  ],
}
