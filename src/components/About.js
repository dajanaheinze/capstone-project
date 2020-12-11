import styled from 'styled-components/macro'
import data from '../data/about.json'

export default function AboutPage() {
  return (
    <>
      {data.map(
        ({ headline, title, description, description1, description2, id }) => (
          <AboutPageStyled key={id}>
            <h2>{headline}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{description1}</p>
            <p>{description2}</p>
          </AboutPageStyled>
        )
      )}
    </>
  )
}

const AboutPageStyled = styled.div`
  border: 1px solid var(--primary-border);
  background-color: var(--secondary-background);
  box-shadow: 20px 20px 60px var(--primary-shadow);
  margin: 15px 0 0 20px;
  height: 400px;
  overflow: auto;
  padding: 0 15px 20px;
  width: 90%;

  p {
    text-align: left;
    margin-top: 20px;
  }
`
