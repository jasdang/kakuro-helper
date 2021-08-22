import React, { useState } from 'react'

const SumToNumbers = (): JSX.Element => {
  const [sum, setSum] = useState(0)
  const [numOfDigits, setNumOfDigits] = useState(0)
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    // TODO: Break sum to numbers
  }
  return (
    <span>
      <h3>BREAK SUM TO NUMBERS</h3>
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          placeholder="Sum"
          value={sum}
          onChange={(e: any) => setSum(parseInt(e.target.value, 10))}
        />
        <input
          type="number"
          placeholder="Nos of digits"
          value={numOfDigits}
          onChange={(e: any) => setNumOfDigits(parseInt(e.target.value, 10))}
        />
        <button type="submit">Submit</button>
      </form>
    </span>
  )
}

export default SumToNumbers
