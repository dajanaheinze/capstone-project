import styled from 'styled-components/macro';
import TutorialTemplate from './TutorialTemplate'


export default function App() {
  return (
      <PageLayout>
        <TutorialTemplate/>    
      </PageLayout>
  );
}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  position: relative;
  margin: 0;
`


