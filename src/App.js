import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {
  // https://fixer.io/
  const FIXER_API = `http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FIXER_API_KEY}`;

  // https://restcountries.eu
  const REST_CONTRIES_API = `https://restcountries.eu/rest/v2/currency`;

  // Fetch data about currencies
  const getExchangeRate = async (fromCurrency, toCurrency) => {
    try {
      const {
        data: { rates },
      } = await axios.get(FIXER_API);

      const won = 1 / rates[fromCurrency];
      const exchangeRate = won * rates[toCurrency];

      return exchangeRate;
    } catch (error) {
      throw new Error(
        `Unable to get currency ${fromCurrency} and ${toCurrency}`
      );
    }
  };
  getExchangeRate('USD', 'KRW');

  // Fetch data about countries
  const getCountries = async (currencyCode) => {
    try {
      const { data } = await axios.get(`${REST_CONTRIES_API}/${currencyCode}`);

      return data.map(({ name }) => name);
    } catch (error) {
      throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
  };

  getCountries('KRW');

  const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();

    const [exchangeRate, countries] = await Promise.all([
      getExchangeRate(fromCurrency, toCurrency),
      getCountries(toCurrency),
    ]);

    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}.
    You can spend these in the following countries: ${countries}.`;
  };

  convertCurrency('KRW', 'USD', 20000)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

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
