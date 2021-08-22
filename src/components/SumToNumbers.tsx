import React, { useEffect, useState } from 'react'

type Combination = number[]
type CombinationStore = {
  [index: number]: Combination[]
}

const getCombinationHash = (): CombinationStore => {
  return {}
}

const SumToNumbers = (): JSX.Element => {
  const [sum, setSum] = useState(0)
  const [numOfDigits, setNumOfDigits] = useState(0)
  // eslint-disable-next-line
  const [shouldShowResult, setShouldShowResult] = useState(false)
  // eslint-disable-next-line
  const [results, setResults] = useState([])
  // eslint-disable-next-line
  const [combinationStore, setCombinationStore] = useState({})

  useEffect(() => {
    // TODO: set CombinationStore
    const combinationHash = getCombinationHash()
    setCombinationStore(combinationHash)
    return setCombinationStore({})
  }, [])

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    // TODO: Get combination from CombinationStore based on sum and number of digits
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
      <div>{shouldShowResult && results}</div>
    </span>
  )
}

export default SumToNumbers
