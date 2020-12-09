import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Home } from '../images/home.svg'
import { ReactComponent as About } from '../images/about.svg'

export default function Footer() {
  return (
    <FooterStyled>
      <nav>
        <NavLink to="/">
          <Home />
        </NavLink>
        <NavLink to="/about">
          <About />
        </NavLink>
      </nav>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: grid;
  align-self: flex-end;
  background-color: var(--primary-background);
  border-radius: 20px;
  box-shadow: 8px 8px 10px var(--tertiary-shadow);
  bottom: 10px;
  left: 10px;
  position: fixed;
  width: 95%;
  //z-index: 999;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  svg {
    outline: 0;
    width: 60%;
  }
`
