module.exports = {
  siteMetadata: {
    title: 'Adedeji Stephen',
    url: 'http://adedejistephen.com',
    bioExcerpt: `I'm a Fullstack Software Engineer from Nigeria. I make functional web applications on LAMP and MERN stack, and I have keen interest in solving problems.`,
    socials: {
      twitter: 'https://twitter.com/ionwarez',
      github: 'https://github.com/ionware',
      facebook: 'https://facebook.com/pythonleet',
      linkedin: 'http://linkedin.com/in/ionware',
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
