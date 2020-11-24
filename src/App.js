import styled from 'styled-components/macro'
import Header from './components/AppHeader'
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
  grid-template-rows: 80px auto;
  position: relative;
  height: 100vh;
  margin: 0;
  place-items: center;
`
