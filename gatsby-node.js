const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type == 'MarkdownRemark') {
    // Create 'slug' field for each .md post node
    const slug = createFilePath({ node, getNode, basePath: 'blog', trailingSlash: false })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions}) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src', 'templates', 'blog.js'),
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}
