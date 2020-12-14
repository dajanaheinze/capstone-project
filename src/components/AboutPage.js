import styled from 'styled-components/macro'
import data from '../data/about.json'

export default function AboutPage() {
  return (
    <AboutPageStyled>
      {data.map(
        ({ headline, title, description, description1, description2, id }) => (
          <AboutPageWrapper key={id}>
            <h2>{headline}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{description1}</p>
            <p>{description2}</p>
          </AboutPageWrapper>
        )
      )}
    </AboutPageStyled>
  )
}

const AboutPageWrapper = styled.div`
  border: 1px solid var(--primary-border);
  background-color: var(--secondary-background);
  box-shadow: 20px 20px 60px var(--primary-shadow);
  margin: 15px 0 0 20px;
  height: auto;
  padding: 0 15px 20px;
  width: 90%;

  p {
    text-align: left;
    margin-top: 20px;
  }
`

const AboutPageStyled = styled.div`
  display: grid;
  place-items: center;
  overflow: auto;

  &::after {
    content: ' ';
    display: block;
    height: 40px;
    width: 60%;
  }
`
