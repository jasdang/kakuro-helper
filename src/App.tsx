import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NumbersToSum from './components/NumbersToSum'
import SumToNumbers from './components/SumToNumbers'

const App: React.FC = () => {
  return (
    <Router>
      <h1>KAKURO HELPER</h1>
      <Switch>
        <Route path="/numbers-to-sum">
          <NumbersToSum />
        </Route>
        <Route path="/sum-to-numbers">
          <SumToNumbers />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
