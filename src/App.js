import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Result from "./components/pages/result";
import WhatIfJesusComeBack from "./components/pages/backOfJesus"

function App() {
  return (
      <Router>
        <Route exact path="/" component={Result}/>
        <Route path="/voltaJesus" component={WhatIfJesusComeBack} />
      </Router>
  );
}

export default App;
