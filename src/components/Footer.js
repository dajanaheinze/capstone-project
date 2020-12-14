import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ReactComponent as HomeIcon } from '../images/home.svg'
import { ReactComponent as AboutIcon } from '../images/about.svg'

export default function Footer() {
  return (
    <FooterStyled>
      <NavLinkStyled exact to="/">
        <HomeIcon />
      </NavLinkStyled>
      <NavLinkStyled exact to="/about">
        <AboutIcon />
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
