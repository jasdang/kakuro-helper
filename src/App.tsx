import React from 'react'
import './App.css'
import NumbersToSum from './components/NumbersToSum'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>KAKURO HELPER</h1>
      <NumbersToSum />
      <br />
      <h3>BREAK SUM TO NUMBERS</h3>
      <form action="">
        <input type="number" placeholder="Sum" />
        <input type="number" placeholder="Nos of digits" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
