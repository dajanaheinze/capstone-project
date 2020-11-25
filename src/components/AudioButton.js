import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as PlayIcon } from '../images/playicondark.svg'
import { ReactComponent as PauseIcon } from '../images/pauseicondark.svg'
import { Howl } from 'howler'
import { useEffect, useState, useRef } from 'react'
import data from '../data/content.json'

export default function AudioButton() {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false)
  const soundRef = useRef(null) //Prüfen und Googlen wie einbauen
  const audioFile = data.find((audio) => audio === audio.audio)
  console.log(audioFile)

  const sound = new Howl({
    src: [audioFile],
    preload: true,
    volume: 0.2,
    autoplay: false,
    onend: function () {
      setIsSoundPlaying(false)
    },
  })

  useEffect(() => {
    if (isSoundPlaying) {
      sound.play()
    } else {
      sound.pause()
    }
  })

  return (
    <Button onClick={toggleSound}>
      {isSoundPlaying ? <PauseIcon /> : <PlayIcon />}
    </Button>
  )

  function toggleSound() {
    setIsSoundPlaying(!isSoundPlaying)
  }
}

const Button = styled.button`
  background-color: transparent;
  border: none;
`
