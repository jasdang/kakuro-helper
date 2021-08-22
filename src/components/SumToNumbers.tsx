import React from 'react'

const SumToNumbers = (): JSX.Element => {
  return (
    <span>
      <h3>BREAK SUM TO NUMBERS</h3>
      <form action="">
        <input type="number" placeholder="Sum" />
        <input type="number" placeholder="Nos of digits" />
        <button type="submit">Submit</button>
      </form>
    </span>
  )
}

export default SumToNumbers
