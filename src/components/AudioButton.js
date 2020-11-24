import React from 'react'
import styled from 'styled-components/macro'

export default function AudioButton({ handleClick }) {
  return (
    <Button onClick={handleClick}>
      {isAudioPlaying ? <PauseIcon title="pause" /> : <PlayIcon title="play" />}
    </Button>
  )
}

//wenn der Button geklickt wird soll die Audiodatei gespielt werden und das Icon wechseln auf Pause
//wenn der Button wieder geklickt wird, soll die Audiodatei weiter abgespielt werden. Button Icon Start
