module.exports = {
  siteMetadata: {
    title: 'Adedeji Stephen',
    bioExcerpt: `Lorem ipsum dolor sit amet, ipsum euripidis intellegebat vis ea, prodesset adolescens ad cum. Dicta omnes suscipit vix cu. Virtute meliore facilis eam.`,
    socials: {
      twitter: 'https://twitter.com/ionwarez',
      github: 'https://github.com/ionware',
      facebook: 'https://facebook.com/ionware',
      linkedin: 'https://linkedin.com/m/ionware'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 790,
            }
          }
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adedeji Stephen',
        short_name: 'Adedeji Stephen',
        start_url: '/',
        background_color: '#000',
        theme_color: '#1DD1A1',
        icon: 'static/icon.png',
        display: 'standalone'
      }
    },
    'gatsby-plugin-offline',
  ]
}
