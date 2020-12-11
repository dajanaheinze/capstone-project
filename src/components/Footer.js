import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Home } from '../images/home.svg'
import { ReactComponent as About } from '../images/about.svg'

export default function Footer() {
  return (
    <FooterStyled>
      <NavLinkStyled to="/">
        <Home />
      </NavLinkStyled>
      <NavLinkStyled to="/about">
        <About />
      </NavLinkStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--primary-background);
  border-radius: 20px;
  box-shadow: 8px 8px 10px var(--tertiary-shadow);
  width: 95%;

  svg {
    outline: 0;
    width: 60%;
  }
`

const NavLinkStyled = styled(NavLink)`
  opacity: 40%;

  &.active {
    opacity: 100%;
  }
`
