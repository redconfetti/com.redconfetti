import React from 'react'
import { Link } from 'gatsby'
import styles from '../../stylesheets/music.module.scss'

const MusicNav = () => {
  return (
    <div className={styles.musicNav}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/music' style={{ color: '#FFF' }}>Music</Link>
        </li>
      </ul>
      <div className='clear' />
    </div>
  )
}

export default MusicNav
