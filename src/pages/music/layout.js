import React from 'react'
import PropTypes from 'prop-types'

import * as styles from '../../stylesheets/music.module.scss'

import MusicNav from './nav'
import MusicFooter from './footer'

// import { rhythm, scale } from '../utils/typography'

const MusicLayout = ({ children }) => {
  // eslint-disable-next-line no-undef
  // const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div className={styles.musicLayout}>
      <MusicNav />
      <div className={styles.musicDesignHeader} />
      <main>{children}</main>
      <div className={styles.musicDesignFooter} />
      <MusicFooter />
    </div>
  )
}

MusicLayout.propTypes = {
  children: PropTypes.object
}

export default MusicLayout
