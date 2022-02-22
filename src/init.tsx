import React from 'react';
import { useGridSignals } from '@ombori/grid-signals-react';
import App from './app';

const Init = () => {
  const isSignalsReady = useGridSignals();

  if (!isSignalsReady) {
    return <div className='init'>Initializing App...</div>
  }

  return <App />
}

export default Init;
