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
  border-radius: 20px;
  box-shadow: 10px 10px 10px 10px var(--tertiary-shadow);
  place-items: center;
  position: relative;
  margin: 0 10px 5px 10px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
  }

  svg {
    outline: 0;
    width: 60%;
  }
`
