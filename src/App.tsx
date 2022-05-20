import React from 'react';
import './App.css';
import { Meteo } from './features/meteo/Meteo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Meteo />
      </header>
    </div>
  );
}

export default App;
