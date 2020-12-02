import styled from 'styled-components/macro'
import Header from './components/AppHeader'
import TutorialList from './components/TutorialList'

export default function App() {
  return (
    <PageLayout>
      <Header headline="Mind Reset" />
      <TutorialList />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 90px auto;
  position: relative;
  height: 100vh;
  margin: 0;
  place-items: center;
`
