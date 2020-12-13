import React from 'react'
import styles from '../../stylesheets/music.module.scss'

const MusicFooter = () => {
  const creativeCommonsLicense = `
    <p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text">
      <a rel="cc:attributionURL" property="dct:title" href="https://redconfetti.com/music">Ultra Illusion</a>
      by
      <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://redconfetti.com/about">Jason Miller</a>
      is licensed under
      <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0">
        CC BY-SA 4.0
        <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" />
        <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" />
        <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" />
      </a>
    </p>`

  const originalLicense = `
    <a rel="license" href="https://creativecommons.org/licenses/by/3.0/us/">
      <img alt="Creative Commons License" style="border-width:0" src="//creativecommons.org/images/public/somerights20.png" />
    </a><br />
    <span xmlns:dc="http://purl.org/dc/elements/1.1/" href="http://purl.org/dc/dcmitype/Sound" property="dc:title" rel="dc:type">
      Ultra Illusion
    </span> by
    <a xmlns:cc="https://creativecommons.org/ns#" href="//www.redconfetti.com/music/" property="cc:attributionName" rel="cc:attributionURL">
      redconfetti
    </a> is licensed under a
    <a rel="license" href="http://creativecommons.org/licenses/by/3.0/us/">
      Creative Commons Attribution 3.0 United States License
    </a>.`

  return (
    <footer className={styles.musicFooter}>
      <p dangerouslySetInnerHTML={{ __html: originalLicense }} />
    </footer>
  )
}

export default MusicFooter
