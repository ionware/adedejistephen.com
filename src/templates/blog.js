import React from 'react'
import { Link, graphql } from 'gatsby'
import Meta from '../components/Metadata'
import Header from '../components/Header'

export default ({ data }) => {
  const blog = data.markdownRemark
  const url = data.site.siteMetadata.url
  return (
    <React.Fragment>
      <Meta>
        <meta property="og:title" content={blog.frontmatter.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:url" content={`${url}/${blog.fields.slug}`} />
        <title>{blog.frontmatter.title}</title>
        <meta name="description" content={blog.excerpt}/>
        <body className="body-light" />
      </Meta>
      <Header showAvatar={true} />
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
        { /* Return to blog posts list */}
        <div className="mt-lg text-center">
          <Link to={'/blog'} className="link__primary">
            &larr; Return to blogs
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        date(formatString: "DD MMMM, YYYY")
      },
      fields {
        slug
      },
      excerpt,
      timeToRead
    },
    site {
      siteMetadata {
        url
      }
    }
  }
`