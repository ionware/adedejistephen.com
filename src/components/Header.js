import React from 'react'
import { PropTypes } from 'prop-types'
import selfImg from '../assets/adedeji.png'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Header({ showAvatar }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="header">
      <nav className="flex justify-content-end">
        { showAvatar 
        && <Link to={'/'} className="link__nodeco">
            <img src={selfImg} 
              alt={data.site.siteMetadata.title} 
              className="avatar"/>
        </Link>
        }
        <ul className="nav-list">
          <li className="nav-list__item">
            <Link to={'blog'} className="nav-list__link">
              Blog
            </Link>
          </li>
          <li className="nav-list__item">
            <a href="/resume.pdf" 
              className="nav-list__link btn btn-primary-outline btn-rad">
                Resume
            </a>
          </li>
        </ul>
      </nav>
  </header>
  )
}

Header.propTypes = {
  showAvatar: PropTypes.bool,
}

Header.defaultProps = {
  showAvatar: false,
}