import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

declare global {
  interface Window {
    gridapp: any;
  }
}

function initAppSettings(setAppSettings: Function) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log('Settings development mode');
    const settings = require('./settings.json');
    settings.loaded = true;
    console.log({ settings });
    setAppSettings(settings as any);
  } else {
    console.log('Settings production mode');

    window.addEventListener('GridappReady', () => {
      // settings are ready for use!
      const gridapp = window.gridapp;
      const settings = gridapp.getSettings();
      settings.loaded = true;
      setAppSettings(settings as any);
      console.log({ settings });
    });
  }
}

function App() {
  const [appSettings, setAppSettings] = useState({
    loaded: false,
    productName: '',
    productPrice: '',
  });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (appSettings.loaded) {
      return;
    }
    initAppSettings(setAppSettings);
  }, [appSettings.loaded]);

  const { productName, productPrice } = appSettings;

  return (
    <div className="App">
      {appSettings.loaded ? (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Product name: {productName}</p>
          <p>Product price: {productPrice}</p>
        </header>
      ) : (
        'Please wait, loading gridapp settings...'
      )}
    </div>
  );
}

export default App;
