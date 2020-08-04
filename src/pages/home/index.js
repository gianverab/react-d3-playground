import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-title">React and D3 Playground</h1>
        <Link className="App-link" to="../barchart">
          Bar Chart Example
        </Link>
      </header>
    </div>
  );
}

export default Home;
