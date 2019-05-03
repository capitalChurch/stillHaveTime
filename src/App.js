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
import Info from "./components/pages/info";
import YourName from "./components/pages/yourName";
import YourAge from "./components/pages/yourAge";
import YourCity from "./components/pages/yourCity";
import HisAge from "./components/pages/hisAge";
import HisCity from "./components/pages/hisCity";
import HisName from "./components/pages/hisName";
import Relation from "./components/pages/relation";
import FamiliarRelation from "./components/pages/familiarRelation";
import VacationTogether from "./components/pages/vacationTogether";
import TimeVacationTogether from "./components/pages/timeVacationTogether";
import RegularTimeTogether from "./components/pages/regularTimeTogether";
import TimesSeenEachOther from "./components/pages/timesSeenEachOther";

function App() {
  return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/voltaJesus" component={WhatIfJesusComeBack} />
        <Route path="/result" component={Result} />
        <Route path="/result2" component={Result2} />
        <Route path="/shareResult" component={ShareResult} />
        <Route path="/shareResult2" component={ShareResult2} />
        <Route path="/birthDate" component={BirthDate} />
        <Route path="/info" component={Info} />
        <Route path="/yourName" component={YourName } />
        <Route path="/yourAge" component={YourAge} />
        <Route path="/yourCity" component={YourCity} />
        <Route path="/hisAge" component={HisAge}/>
        <Route path="/hisCity" component={HisCity}/>
        <Route path="/hisName" component={HisName}/>
        <Route path="/relation" component={Relation}/>
        <Route path="/familiarRelation" component={FamiliarRelation} />
        <Route path="/vacationTogether" component={VacationTogether} />
        <Route path="/timeVacationTogether" component={TimeVacationTogether} />
        <Route path="/regularTimeTogether" component={RegularTimeTogether} />
        <Route path="/timesSeenEachOther" component={TimesSeenEachOther} />
      </Router>
  );
}

export default App;
