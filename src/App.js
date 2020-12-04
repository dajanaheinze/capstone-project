import styled from 'styled-components/macro'
import Header from './components/AppHeader'
import TutorialList from './components/TutorialList'

export default function App() {
  return (
    <AppLayout>
      <Header headline="Mind Reset" />
      <TutorialList />
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 90px auto;
  position: relative;
  height: 100vh;
  margin: 0;
  max-width: 600px;
  place-items: center;
`
