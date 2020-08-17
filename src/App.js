import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {
  // https://fixer.io/
  const FIXER_API = `http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FIXER_API_KEY}`;

  // https://restcountries.eu
  const REST_CONTRIES_API = `https://restcountries.eu/rest/v2/currency/cop`;

  // Fetch data about currencies
  const getExchangeRate = async (fromCurrency, toCurrency) => {
    const {
      data: { rates },
    } = await axios.get(FIXER_API);

    const won = 1 / rates[fromCurrency];
    const exchangeRate = won * rates[toCurrency];

    return exchangeRate;

    console.log(rates);
    console.log(exchangeRate);
  };
  getExchangeRate('USD', 'KRW');

  // Fetch data about countries

  // Output data

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
