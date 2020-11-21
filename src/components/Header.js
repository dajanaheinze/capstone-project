import React from 'react'
import styled from 'styled-components/macro'
//import 'imageheader' from '../images/header.png'

export default function Header({ headline }) {
  return (
    <HeaderWrapper>
      <HeaderTitle>{headline}</HeaderTitle>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  background-color: var(--primary-background);
  width: 100%;
`

const HeaderTitle = styled.h1`
  color: var(--primary-text);
  font-weight: 600;
  letter-spacing: 5px;
  text-align: center;
  text-transform: uppercase;
`
