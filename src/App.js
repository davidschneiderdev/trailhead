import React from 'react';
import TrailheadApp from './TrailheadApp'
import styled from 'styled-components'

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export default function App() {

    return (
      <AppContainer>
          <TrailheadApp />
      </AppContainer>
    );
  
}


