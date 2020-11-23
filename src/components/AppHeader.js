import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Logo } from '../images/logo.svg'

export default function AppHeader({ headline }) {
  return (
    <Header>
      <LogoStyling />
      <Title>{headline}</Title>
    </Header>
  )
}

const Header = styled.header`
  display: grid;
  background-color: var(--primary-background);
  place-items: center;
  position: relative;
  width: 100%;
`
const LogoStyling = styled(Logo)`
  margin: 10px 0;
`

const Title = styled.h1`
  color: var(--primary-text);
  font-size: 1.7em;
  font-weight: 500;
  letter-spacing: 5px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`
