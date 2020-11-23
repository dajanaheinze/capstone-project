import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Logo } from '../images/logo.svg'

export default function Header({ headline }) {
  return (
    <HeaderWrapper>
      <LogoStyled />
      <HeaderTitle>{headline}</HeaderTitle>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: grid;
  background-color: var(--primary-background);
  place-items: center;
  width: 100%;
`
const LogoStyled = styled(Logo)`
  margin-bottom: 5px;
`

const HeaderTitle = styled.h1`
  color: var(--primary-text);
  font-size: 1.7em;
  font-weight: 500;
  margin: 0;
  letter-spacing: 5px;
  text-align: center;
  text-transform: uppercase;
`
