import styled from 'styled-components/macro'

export default function AboutPage() {
  return (
    <AboutPageStyled>
      <p>Hallo ich bin die About Page</p>
    </AboutPageStyled>
  )
}

const AboutPageStyled = styled.div`
  display: grid;
  border: 1px solid var(--primary-border);
  background-color: var(--secondary-background);
  box-shadow: 20px 20px 60px var(--primary-shadow);
  margin-top: 15px;
  padding: 0 15px 20px;
  place-items: center;
  width: 90%;
  height: auto;
  overflow: auto;

  h2 {
    font-size: 1em;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
  }
  h3 {
    font-size: 0.8em;
    font-weight: 400;
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-size: 0.8em;
    font-weight: 200;
    hyphens: auto;
    margin-top: 10px;
    padding: 0 10px;
    text-align: center;
  }
`
