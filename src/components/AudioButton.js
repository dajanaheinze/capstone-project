import React from 'react'
import styled from 'styled-components/macro'
import { Howl } from 'howler'
import { useEffect, useState, useRef } from 'react'
import { ReactComponent as PlayIcon } from '../images/playicondark.svg'
import { ReactComponent as PauseIcon } from '../images/pauseicondark.svg'

export default function AudioButton({ audiofile }) {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false)
  const soundRef = useRef(null)

  useEffect(() => {
    soundRef.current?.stop()
    soundRef.current = new Howl({
      src: [audiofile],
      preload: true,
      volume: 0.2,
      autoplay: false,
      onend: function () {
        setIsSoundPlaying(false)
      },
    })
  })

  useEffect(() => {
    if (isSoundPlaying) {
      soundRef.current.play()
    } else {
      soundRef.current.pause()
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
