import React, { createRef } from 'react'
import { graphql } from 'gatsby'
import Icons from '../components/Icons'
import imgSrc from '../assets/adedeji.png'
import Animate from '../components/Animate'

export default ({ data }) => {
    return (
      <React.Fragment>
        <header className="header">
          <nav className="flex justify-content-end">
            <ul className="nav-list">
              <li className="nav-list__item"><a href="#" className="nav-list__link">Blog</a></li>
              <li className="nav-list__item"><a href="/resume.pdf" className="nav-list__link btn btn-primary-outline btn-rad">Resume</a></li>
            </ul>
          </nav>
        </header>
        <div className="w-max-width mt-md">
          <main className="flex flex-info justify-content-center align-items-center align-content-center">
            <Animate duration={1000} easing='linear' opacity={[0, 1]} delay={3000}>
              <img src={imgSrc} alt="Adedeji Stephen" className="flex-info__image" ref={ createRef() }/>
            </Animate>
            <div className="flex-info__info">
              <Animate opacity={[0, 1]} duration={2100} easing='linear'>
                <h5 className="text-uppercase text-primary" ref={createRef()}>Hello, I'm</h5>
              </Animate>
              <Animate opacity={[0, 1]} duration={2000} easing='linear' delay={1100}>
                <h1 className="hero" ref={createRef()}>Adedeji Stephen.</h1>
              </Animate>
              <Animate duration={2500} opacity={[0, 1]} easing={'linear'} delay={2200}>
                <h2 className="hero hero-alt" ref={createRef()}>I build stuffs for the Web</h2>
              </Animate>
              <Animate duration={1100} opacity={[0, 1]} translateY={[10, 0]} easing='linear' delay={3200}>
                <p className="text-justify" ref={createRef()}>
                  { data.site.siteMetadata.bioExcerpt }
                </p>
              </Animate>
              <Icons />
            </div>
          </main>
        </div>
      </React.Fragment>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        bioExcerpt,
        title
      }
    }
  }
`
