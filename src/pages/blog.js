import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/Header'
import Meta from '../components/Metadata'
import Animate from '../components/Animate'

export default ({ data }) => {
  const site = data.site.siteMetadata
  return (
    <React.Fragment>
      <Meta>
        <title>{ site.title } &mdash; Blog</title>
        <meta name="description" content={`${site.bioExcerpt}`} />
        <body className="body-light" />
      </Meta>
      <Header showAvatar={true} />
      <div className="w-max-width w-800">
        <div className="flex justify-content-center">
          {
            data.allMarkdownRemark.edges.map(({node}, index) => {
              return (
                <Animate 
                  duration={1000} 
                  easing="linear" 
                  translateY={[20, 0]} 
                  opacity={[0, 1]} 
                  delay={index * 700}>
                    <Link key={node.id} 
                      to={node.fields.slug} 
                      className="blog" 
                      ref={React.createRef()}>
                      <div>
                        <h3 className="blog__title">{node.frontmatter.title}</h3>
                        <p className="blog__excerpt">{node.excerpt}</p>
                        <span className="blog__date">
                          { node.frontmatter.date } &mdash;
                          <span className="text-lowercase">
                            { node.timeToRead } min{ node.timeToRead > 1 ? 's' : ''} read
                          </span>
                        </span>
                      </div>
                  </Link>
                </Animate>
              )
            })
          }
        </div>
        </div>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt,
          timeToRead
        }
      }
    },
    site {
      siteMetadata {
        title,
        bioExcerpt
      }
    }
  }
`