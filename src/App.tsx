import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import NumbersToSum from './components/NumbersToSum'
import SumToNumbers from './components/SumToNumbers'
import GoogleAds from './components/GoogleAds'

const App: React.FC = () => {
  return (
    <Router>
      <h1>KAKURO HELPER</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/numbers-to-sum">Numbers To Sum</Link>
        <Link to="/sum-to-numbers">Sum To Numbers</Link>
      </nav>
      <Switch>
        <Route path="/numbers-to-sum">
          <NumbersToSum />
        </Route>
        <Route path="/sum-to-numbers">
          <SumToNumbers />
        </Route>
      </Switch>
      <GoogleAds slot="3037224393" />
    </Router>
  )
}

export default App
