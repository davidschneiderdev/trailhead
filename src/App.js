import React from 'react';
import TrailheadApp from './TrailheadApp'
import styled from 'styled-components'
import wave from './grayWave.svg'

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 450px) {
    background-color: green;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default function App() {

    return (
      <AppContainer
        style={{backgroundImage: `url(${wave})`}}>
          <TrailheadApp />
      </AppContainer>
    );
  
}


