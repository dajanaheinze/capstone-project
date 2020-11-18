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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  position: relative;
  margin: 0;
`


