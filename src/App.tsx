import React from 'react'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>KAKURO HELPER</h1>
      <h3>NUMBERS TO SUM</h3>
      <form action="">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="submit">Submit</button>
      </form>
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
