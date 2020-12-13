// import React from 'react'
import React, { useEffect } from 'react'
import styles from '../../stylesheets/music.module.scss'

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const MusicMain = () => {
  let mounted = false

  useEffect(() => {
    mounted = true
  }, [])

  let audioPlayer = {
    playByIndex: (index) => {}
  }

  const changeSong = (index) => {
    const i = index
    return (event) => {
      audioPlayer.playByIndex(i)
      event.preventDefault()
      return false
    }
  }

  const songs = [
    {
      name: 'Support',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-support.mp3'
    },
    {
      name: 'Techlithium',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-techlithium.mp3'
    },
    {
      name: 'Dead',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-dead.mp3'
    },
    {
      name: 'Slowly Dying',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-slowly-dying.mp3'
    },
    {
      name: 'Dividied',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-dividied.mp3'
    },
    {
      name: 'Anger is Pain',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-anger-is-pain.mp3'
    },
    {
      name: 'Alien',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-alien.mp3'
    },
    {
      name: 'Airsdream',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-airsdream.mp3'
    },
    {
      name: 'Funeral Song',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-funeral-song.mp3'
    },
    {
      name: 'Funeral Song (Alternative Mix)',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-funeral-song-alternative.mp3'
    },
    {
      name: 'Rabies',
      singer: 'redconfetti (featuring Polymer Police)',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-rabies.mp3',
      note: '(featuring Polymer Police)'
    },
    {
      name: 'Experi-mental',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-experi-mental.mp3'
    },
    {
      name: 'NowNowNow',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-nownownow.mp3'
    },
    {
      name: 'Hyrule Flyby',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-hyrule-flyby.mp3'
    },
    {
      name: 'Village Trance',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-village-trance.mp3'
    },
    {
      name: 'Meetwood Flac',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-meetwood-flac.mp3'
    },
    {
      name: 'Island Jazz',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-island-jazz.mp3'
    },
    {
      name: 'song3',
      singer: 'redconfetti',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-song3.mp3'
    },
    {
      name: 'nerfherder',
      singer: 'redconfetti (featuring MOS Theory)',
      cover: '/images/pages/music/redconfetti.jpg',
      musicSrc: '/mp3/ultra-illusion/redconfetti-nerfherder.mp3',
      note: '(featuring MOS Theory)'
    }
  ]

  const options = {
    autoPlay: false,
    audioLists: songs,
    mode: 'full',
    theme: 'dark',
    preload: false,
    defaultPosition: {
      bottom: 15,
      right: 20
    },
    locale: 'en_US',
    glassBg: true
  }

  return (
    <main className={styles.musicMain} id='music-main'>
      <p>
        Here is a collection of music I made from late 2007 - late 2008. I am dubbing the album 'Ultra Illusion'. The
        music is free for you to download, and also available for anyone to remix or use however they wish as per the
        Creative Commons license linked at the bottom of this page.
      </p>

      <p>
        Album produced using
        {' '}<a href='http://www.steinberg.net/en/products/musicproduction/cubase4_product.html'>Cubase 4</a>{' '}
        with <a href='http://www.ikmultimedia.com/'>IK Multimedia Studio Bundle</a>.
      </p>

      <ol>
        {songs && songs.map((song, index) => (
          <li key={index}>
            <a href='#' onClick={changeSong(index)}>{song.name}</a>
            {song.note}
          </li>
        ))}
      </ol>

      {(typeof window !== 'undefined') &&
        <ReactJkMusicPlayer
          {...options}
          getAudioInstance={(instance) => {
            audioPlayer = instance
          }}
        />}
    </main>
  )
}

export default MusicMain
