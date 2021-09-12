import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import NumbersToSum from './components/NumbersToSum'
import SumToNumbers from './components/SumToNumbers'
import GoogleAds from './components/GoogleAds'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>KAKURO HELPER</h1>
        <nav className="Nav">
          <Link to="/">Home</Link>
          <Link to="/numbers-to-sum">Numbers To Sum</Link>
          <Link to="/sum-to-numbers">Sum To Numbers</Link>
        </nav>
        <div className="helper-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/numbers-to-sum">
              <NumbersToSum />
            </Route>
            <Route path="/sum-to-numbers">
              <SumToNumbers />
            </Route>
          </Switch>
        </div>
        <GoogleAds slot="3037224393" />
      </div>
    </Router>
  )
}

export default App
