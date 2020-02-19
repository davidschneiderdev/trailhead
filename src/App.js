import React from 'react';
import './App.css';
import SearchApp from './components/SearchApp';
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
        <SearchApp />
    </AppContainer>
  );
}

export default App;
