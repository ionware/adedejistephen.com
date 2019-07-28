import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          bioExcerpt,
          title,
          url
        }
      }
    }
  `)
  const _ = site.siteMetadata
  return (
    <Helmet>
      <html lang="en" />
      <meta property="og:title" content={_.title} />
      <meta property="og:description" content={_.bioExcerpt} />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:url" content={_.url} />
      <meta property="og:site_name" content={_.title} />
      <link rel="apple-touch-icon" href="/apple.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-72.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-114.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-144.png"/>
      <link rel="icon" href="/icon.png"/>
      { children }
    </Helmet>
  )
}