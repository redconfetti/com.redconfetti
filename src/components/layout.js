import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Nav from '../components/nav'

import { rhythm, scale } from '../utils/typography'

const Layout = ({ location, title, authorName, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            color: 'inherit'
          }}
          to='/'
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            color: 'inherit'
          }}
          to='/'
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <header>{header}</header>
      <Nav />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} {authorName}, Built with
        {' '}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
  authorName: PropTypes.string,
  location: PropTypes.object
}

export default Layout
