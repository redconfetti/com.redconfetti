import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ data, location }) => {
  const { author, social, title } = data.site.siteMetadata

  return (
    <Layout location={location} title={title} authorName={author.name}>
      <SEO title='About | redconfetti' />
      <h1>About</h1>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginBottom: 0,
          minWidth: 50
        }}
      />
      <p>Hello I'm {author.name}</p>
      <p>I'm a website developer, a student of the <a href='https://www.diamondapproach.org/'>Diamond Approach</a>,
        and I also occassionally make music.
      </p>
      <p>
        {social.twitter &&
          <>
            Check me offending people on
            <a href={`https://twitter.com/${social.twitter}`}>
              Twitter
            </a>
          </>}
      </p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title,
        author {
          name
        },
        social {
          twitter
        }
      }
    }
  }
`
