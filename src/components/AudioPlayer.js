import React from 'react'
import { Howl } from 'howler'
import { sound } from '../audio/test.mp3'

export default function AudioPlayer() {
  const playAudio = new Howl({
    src: ['audio/atemzahlung.mp3'],
    preload: true,
    volume: 0.2,
    autoplay: false,
    onplay: function () {
      console.log('Play')
    },
  })
}
//sound.play()
