import styled from 'styled-components/macro'

export default function AboutPage() {
  return (
    <AboutPageStyled>
      <h2>Hallo</h2>
      <p>Hallo ich bin die About Page</p>
    </AboutPageStyled>
  )
}

const AboutPageStyled = styled.div`
  display: grid;
  border: 1px solid var(--primary-border);
  background-color: var(--secondary-background);
  box-shadow: 20px 20px 60px var(--primary-shadow);
  height: auto;
  margin: 15px 0 0 20px;
  overflow: auto;
  padding: 0 15px 20px;
  width: 90%;
`
