import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import MusicLayout from './music/layout'
import MusicMain from './music/main'

const MusicPage = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  // const authorName = data.site.siteMetadata.author.name

  return (
    <MusicLayout>
      <MusicMain />
    </MusicLayout>
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
  })
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
