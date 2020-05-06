import React from 'react';
import { Route } from "react-router-dom";
import Home from "./pages/home";
import BarChart from "./pages/barchart"

import "./App.css"

function App() {
  return (
    <div >
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/barchart" component={BarChart} />
      </div>
    </div>
  );
}

export default App;
