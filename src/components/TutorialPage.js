import styled from 'styled-components/macro'
import { useState } from 'react'
import AudioButton from './AudioButton'
import { ReactComponent as LotusNoFill } from '../images/lotus-small.svg'
import { ReactComponent as LotusFill } from '../images/lotus-fill-small.svg'

export default function TutorialPage({
  headline,
  title,
  imagefile,
  audiofile,
  description1,
  description2,
  description3,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <TutorialWrapper>
      <BookmarkIcon onClick={() => toggleBookmark()}>
        {isBookmarked ? <LotusFill /> : <LotusNoFill />}
      </BookmarkIcon>
      <h2>{headline}</h2>
      <h3>{title}</h3>
      {imagefile && <img src={imagefile} alt="" />}
      {audiofile && <AudioButton audiofile={audiofile} />}
      <p>{description1}</p>
      <p>{description2}</p>
      <p>{description3}</p>
    </TutorialWrapper>
  )
  function toggleBookmark() {
    setIsBookmarked(!isBookmarked)
  }
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
  height: auto;

  img {
    border-radius: 2px;
    margin: 10px 0 10px;
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
const BookmarkIcon = styled.button`
  border: none;
  margin-top: 10px;
`
