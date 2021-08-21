import React from 'react';
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Quiz from "./Quiz"
import Home from "./Home"
import Score from "./Score"

function App() {
  const counter = useSelector(state => state.counter);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/score">
            <Score />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
