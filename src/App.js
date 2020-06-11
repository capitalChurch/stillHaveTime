import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

import {allRoutes, defaultRoute} from "./model/constants";


function renderRoute(route){
      if(route.type === defaultRoute)
            return <Route key={route.type} exact path="/" component={route.component} />;
      
      return <Route key={route.type} path={`/${route.path}`} component={route.component} />;
}

function App() {
  const rotaPadrao = allRoutes.find(x => x.type === defaultRoute);
  const isProduction = process.env.NODE_ENV === 'production';
  return (
      <Router basename={isProduction ? '/still-have-time' : ''}>
            <Switch>
                  {allRoutes.map(renderRoute)}
                  <Route component={rotaPadrao.component}/>
            </Switch>
      </Router>
  );
}

export default App;
