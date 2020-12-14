import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Logo } from '../images/home.svg'

export default function AppHeader({ headline }) {
  return (
    <Header>
      <Logo />
      <Title>{headline}</Title>
    </Header>
  )
}

const Header = styled.header`
  display: grid;
  background-color: var(--primary-background);
  border-radius: 0 0 4px 4px;
  box-shadow: 20px 0 20px var(--tertiary-shadow);
  place-items: center;
  position: relative;
  width: 100%;

  svg {
    width: 10%;
  }
`

const Title = styled.h1`
  color: var(--primary-headline);
  font-size: 1.7em;
  font-weight: 300;
  letter-spacing: 5px;
  margin: 0 0 10px 28px;
  text-align: center;
  text-transform: uppercase;
`
