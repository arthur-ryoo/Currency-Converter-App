import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const FIXER_API = `http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FIXER_API_KEY}`;
const REST_CONTRIES_API = `https://restcountries.eu/rest/v2/currency/cop`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
