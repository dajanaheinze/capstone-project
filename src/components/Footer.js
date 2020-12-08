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
  position: relative;
  display: grid;
  place-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
