import styled from 'styled-components/macro'
import data from '../data/about.json'

export default function AboutPage() {
  return (
   
      {data.map((
        headline,
        description,
        description1,

      ))}
  //     <AboutPageStyled>
  //     <h2>{headline}</h2>
  //     <p>{description}</p>
  //     </AboutPageStyled>
  // )
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
