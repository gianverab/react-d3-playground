import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-title">React and D3 Playground</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link className="App-link" to="/barchart">Bar Chart Example</Link>
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

export default Home;
