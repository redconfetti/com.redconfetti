// Gatsby supports TypeScript natively!
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { rhythm } from '../utils/typography'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const authorName = data.site.siteMetadata.author.name

  return (
    <Layout location={location} title={siteTitle} authorName={authorName}>
      <Seo title='All posts' />
      <Bio />
      {posts.map(({ node }) => {
        const published = node.frontmatter.published
        const title = node.frontmatter.title || node.fields.slug

        if (!published) {
          return false
        }

        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.shape({
          name: PropTypes.string
        })
      })
    }),
    allMarkdownRemark: PropTypes.object
  }),
  location: PropTypes.string
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            published
          }
        }
      }
    }
  }
`
