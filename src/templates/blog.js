import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'

export default ({ data }) => {
  const blog = data.markdownRemark
  return (<>
    <Header showAvatar={true} />
    <Helmet>
        <body className="body-light" />
    </Helmet>
    <div className="w-max-width w-800">
      <div className="mb-md">
        <h1 className="mb-0">
          {blog.frontmatter.title}
        </h1>
        <span className="blog__date">
          { blog.frontmatter.date } &mdash;
          <span className="text-lowercase">
            { blog.timeToRead } min{ blog.timeToRead > 1 ? 's' : ''} read
          </span>
        </span>
      </div>
      <div 
        dangerouslySetInnerHTML={{__html: blog.html}} 
        className="text-justify blog-content">
      </div>
    </div>
  </>)
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        date(formatString: "DD MMMM, YYYY")
      },
      timeToRead
    }
  }
`