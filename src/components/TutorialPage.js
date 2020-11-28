import styled from 'styled-components/macro'
import data from '../data/content.json'
import AudioButton from './AudioButton'

export default function TutorialPage() {
  return (
    <>
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
        }) => (
          <TutorialWrapper key={id}>
            {imagefile && <img src={imagefile} alt="" />}
            <h2>{headline}</h2>
            <h3>{title}</h3>
            <p>{description1}</p>
            {audiofile && <AudioButton audiofile={audiofile} />}
            <p>{description2}</p>
            <p>{description3}</p>
          </TutorialWrapper>
        )
      )}
    </>
  )
}

const TutorialWrapper = styled.div`
  display: grid;
  border: 1px solid var(--primary-border);
  background-color: var(--secondary-background);
  box-shadow: 20px 20px 60px var(--primary-shadow);
  margin-top: 15px;
  padding: 0 15px 20px;
  place-items: center;
  width: 90%;

  img {
    border-radius: 2px;
    margin-top: 25px;
    width: 80%;
  }

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
