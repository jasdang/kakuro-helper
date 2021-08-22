import React from 'react'
import './App.css'
import NumbersToSum from './components/NumbersToSum'
import SumToNumbers from './components/SumToNumbers'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>KAKURO HELPER</h1>
      <NumbersToSum />
      <br />
      <SumToNumbers />
    </div>
  )
}

export default App
