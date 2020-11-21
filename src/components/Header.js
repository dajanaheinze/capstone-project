import React from 'react'
import styled from 'styled-components/macro'
import imageheader from '../images/header.png'

export default function Header() {
  return (
    <HeaderStyle>
      mindreset
      <img src="{ imageheader }" alt="" />
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  background-color: var(--secondary-background);
`
