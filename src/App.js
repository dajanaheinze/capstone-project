import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from './components/AppHeader'
import TutorialList from './components/TutorialList'
import Footer from './components/Footer'
import AboutPage from './components/About'

export default function App() {
  return (
    <AppLayout>
      <Header headline="Mind Reset" />
      <Switch>
        <Route path="/" exact>
          <TutorialList />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>

      <Footer />
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  position: relative;
  height: 100vh;
  margin: 0;

  //position: fixed;
  //bottom: 20px;
  //left: 0;
  //right: 0;
`
