import React from 'react';
import styled from 'styled-components';
import { useSettings } from '@ombori/ga-settings';
import { useHeartbeat } from '@ombori/ga-messaging';
import logo from './logo.svg';

import { Schema as Settings } from './schema';

function App() {
  useHeartbeat();
  const settings = useSettings<Settings>();

  const productName = settings?.productName;
  const productPrice = settings?.productPrice;

  if (!settings) {
    return <Container>Loading gridapp settings...</Container>
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>Product name: {productName}</p>
        <p>Product price: {productPrice}</p>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`

export default App;
