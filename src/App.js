import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Result from "./components/pages/result";
import WhatIfJesusComeBack from "./components/pages/backOfJesus";
import Result2 from "./components/pages/result2";
import ShareResult from "./components/pages/shareResult";
import ShareResult2 from "./components/pages/shareResult2";
import BirthDate from "./components/pages/birthDate";
import Home from "./components/pages/home";

function App() {
  return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/voltaJesus" component={WhatIfJesusComeBack} />
        <Route path="/result" component={Result}/>
        <Route path="/result2" component={Result2}/>
        <Route path="/shareResult" component={ShareResult}/>
        <Route path="/shareResult2" component={ShareResult2}/>
        <Route path="/birthDate" component={BirthDate}/>
      </Router>
  );
}

export default App;
