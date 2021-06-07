import React from 'react';
import { useSettings } from '@ombori/ga-settings';
import { useHeartbeat } from '@ombori/ga-messaging';
import logo from './logo.svg';
import './App.css';

import { Schema as Settings } from './schema';

function App() {
  useHeartbeat();
  const settings = useSettings<Settings>();

  const productName = settings?.productName;
  const productPrice = settings?.productPrice;

  if (!settings) {
    return <div className="App">Loading gridapp settings...</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Product name: {productName}</p>
        <p>Product price: {productPrice}</p>
      </header>
    </div>
  );
}

export default App;
