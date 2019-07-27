import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({ data }) => {
  const blog = data.markdownRemark
  return (<>
    <Helmet>
        <body className="body-light" />
    </Helmet>
    <h1>
      {blog.frontmatter.title}, <small>How art thou?</small>
    </h1>
    <div dangerouslySetInnerHTML={{__html: blog.html}}>

    </div>
  </>)
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`