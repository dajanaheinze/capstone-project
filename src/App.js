import styled from 'styled-components/macro'
import Header from './components/Header'
import TutorialPage from './components/TutorialPage'

export default function App() {
  return (
    <PageLayout>
      <Header headline="Mind Reset" />
      <TutorialPage />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 70px auto;
  margin-top: 10px;
  place-items: center;
`
