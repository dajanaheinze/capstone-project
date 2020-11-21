import React from 'react'
import styled from 'styled-components/macro'
//import 'imageheader' from '../images/header.png'

export default function Header() {
  return (
    <HeaderWrapper>
      <Headline>Mind Reset</Headline>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  background-color: var(--primary-background);
  box-shadow: 20px 20px 60px var(--primary-shadow),
    -10px -10px 50px var(--secondary-shadow);
  width: 100%;
`

const Headline = styled.h1`
  color: var(--primary-text);
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`
