module.exports = {
  siteMetadata: {
    title: 'Adedeji Stephen'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ],
}
