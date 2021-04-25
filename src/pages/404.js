import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const authorName = data.site.siteMetadata.author.name

  return (
    <Layout location={location} title={siteTitle} authorName={authorName}>
      <SEO title='404: Not Found' />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

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
  }
`
