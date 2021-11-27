import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../stylesheets/styles.module.scss'

import { rhythm } from '../utils/typography'

const Nav = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(0.25)
      }}
    >
      <ul className={styles.nav}>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/music'>Music</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
