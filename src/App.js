//import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from './components/AppHeader'
import TutorialList from './components/TutorialList'
import Footer from './components/Footer'

export default function App() {
  return (
    <AppLayout>
      <Header headline="Mind Reset" />
      <TutorialList />
      <Footer />
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 100px auto 60px;
  position: relative;
  height: 100vh;
  margin: 0;
`
