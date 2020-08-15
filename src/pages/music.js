import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const MusicPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const authorName = data.site.siteMetadata.author.name

  return (
    <Layout location={location} title={siteTitle} authorName={authorName}>
      <main>
        <h1>Music</h1>
        <p>This is my musicpage</p>
      </main>
    </Layout>
  )
}

// https://github.com/facebook/prop-types#usage
MusicPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.shape({
          name: PropTypes.string
        })
      })
    })
  }),
  location: PropTypes.string
}

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
export default MusicPage
