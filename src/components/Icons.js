import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import RotatingIconLink from './RotatingIconLink'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            twitter,
            github,
            facebook,
            linkedin
          }
        }
      }
    }
  `)
  const { twitter, github, facebook, linkedin } = data.site.siteMetadata.socials
  return (
    <div>
       <RotatingIconLink to={github}>
        <FaGithub />
      </RotatingIconLink>
      <RotatingIconLink to={facebook}>
        <FaFacebookF />
      </RotatingIconLink>
      <RotatingIconLink to={linkedin}>
        <FaLinkedinIn />
      </RotatingIconLink>
      <RotatingIconLink to={twitter}>
        <FaTwitter />
      </RotatingIconLink>
    </div>
  )
}
