module.exports = {
    siteMetadata: {
        title: ``,
        description: ``,
        author: ``,
        siteUrl: `https://www.batoutofhellmusical.com`
    },
    pathPrefix: `/website/tour-dates/`,
    plugins: [
        'gatsby-plugin-resolve-src',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: 'images',
            },
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: "",

                includeInDevelopment: false,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bat of out Hell`,
                short_name: `Bat of out Hell`,
                start_url: `/`,
                icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone"
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: 'https://www.batoutofhellmusical.com'
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/sitemap.xml`,
                // Exclude specific pages or groups of pages using glob parameters
                // See: https://github.com/isaacs/minimatch
                // The example below will exclude the single `path/to/page` and all routes beginning with `category`
                exclude: [],
                query: `
              {
                  site {
                      siteMetadata {
                          siteUrl
                      }
                  }
                  
                  allSitePage {
                      edges {
                          node {
                              path
                          }
                      }
                  }
              }`
            }
        },
        // `gatsby-plugin-remove-serviceworker`,
        'gatsby-plugin-offline',
    ],
}
