import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ children }) => {
  return (
    <Helmet>
      <html lang="en" />
      <link rel="apple-touch-icon" href="/apple.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-72.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-114.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-144.png"/>
      <link rel="icon" href="/icon.png"/>
      { children }
    </Helmet>
  )
}