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
  grid-template-rows: 48px auto;
  place-items: center;
  margin: 0;
`
