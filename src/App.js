import React from 'react';
import SearchContainer from './containers/SearchContainer'
import styled from 'styled-components'

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
        <SearchContainer />
    </AppContainer>
  );
}

export default App;
