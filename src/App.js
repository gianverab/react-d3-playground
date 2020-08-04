import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import BarChart from "./pages/barchart";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/barchart" component={BarChart} />
    </Switch>
  );
};

export default App;
