import data from '../data/content.json'
import styled from 'styled-components/macro'
import TutorialPage from './TutorialPage'

export default function TutorialList() {
  return (
    <TutorialListStyled>
      {data.map(
        ({
          headline,
          title,
          imagefile,
          audiofile,
          description1,
          description2,
          description3,
          id,
        }) => {
          return (
            <TutorialPage
              headline={headline}
              title={title}
              imagefile={imagefile}
              audiofile={audiofile}
              description1={description1}
              description2={description2}
              description3={description3}
              key={id}
              id={id}
            />
          )
        }
      )}
    </TutorialListStyled>
  )
}
const TutorialListStyled = styled.div`
  display: grid;
  place-items: center;
  overflow: auto;
`
