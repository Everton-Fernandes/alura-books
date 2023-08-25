import Header from './componentes/Header'
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa';

const AppContainer = styled.div`
  width: 100vw;
  height: 200vh;
  background-image: linear-gradient(90deg, #4b0052 35%, #3c0f66);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
