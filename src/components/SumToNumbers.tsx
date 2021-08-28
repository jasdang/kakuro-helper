import React, { useState } from 'react'

type Combination = number[]
type CombinationStore = {
  [index: number]: Combination[]
}

const getCombinationFromArray = (
  numOfDigits: number,
  arr: number[]
): Combination[] => {
  if (arr.length === 0) {
    return []
  }
  if (numOfDigits > arr.length) {
    return []
  }
  if (numOfDigits < 1) {
    return []
  }
  if (numOfDigits === 1) {
    return arr.map((el) => [el])
  }
  const results = []

  for (let id = 0; id < arr.length; id += 1) {
    const firstNum = arr[id]
    const subArr = [...arr]
    subArr.splice(0, id + 1)
    const remainNums = getCombinationFromArray(numOfDigits - 1, subArr)
    const subRes = remainNums.map((pair) => [firstNum, ...pair])
    results.push(...subRes)
  }
  return results
}
const getCombinationOfAllLengthFrom1To9 = (): Combination[] => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const result: Combination[] = []
  for (let num = 1; num <= 9; num += 1) {
    const combs = getCombinationFromArray(num, numbers)
    result.push(...combs)
  }
  return result
}
const getCombinationHash = (): CombinationStore => {
  const combinationHash: CombinationStore = {}
  const combinations = getCombinationOfAllLengthFrom1To9()
  for (const comb of combinations) {
    const sum = comb.reduce((acc, val) => acc + val, 0)
    if (combinationHash[sum]) {
      combinationHash[sum].push(comb)
    } else {
      combinationHash[sum] = [comb]
    }
  }
  return combinationHash
}

const SumToNumbers = (): JSX.Element => {
  const [sum, setSum] = useState(0)
  const [numOfDigits, setNumOfDigits] = useState(0)
  const [shouldShowResult, setShouldShowResult] = useState(false)
  const [results, setResults] = useState([] as Combination[])
  const combinationHash = getCombinationHash()
  const [combinationStore] = useState(combinationHash)

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    const combinationsWithMatchingSum = combinationStore[sum]
    if (numOfDigits === 0) {
      setResults(combinationsWithMatchingSum)
    } else {
      const combinationsWithMatchingLength = combinationsWithMatchingSum.filter(
        (comb) => comb.length === numOfDigits
      )
      setResults(combinationsWithMatchingLength)
    }
    setShouldShowResult(true)
  }
  const handleReset = () => {
    setSum(0)
    setNumOfDigits(0)
    setShouldShowResult(false)
  }

  const compileResults = (res: Combination[]) => {
    return (
      <div>
        {res.map((comb) => (
          <p>{comb.join(', ')}</p>
        ))}
      </div>
    )
  }
  // TODO: Add validation for sum and num of digits in the form
  return (
    <span>
      <h3>BREAK SUM TO NUMBERS</h3>
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          placeholder="Sum"
          value={sum}
          min={1}
          max={45}
          onChange={(e: any) => setSum(parseInt(e.target.value, 10))}
        />
        <input
          type="number"
          placeholder="Nos of digits"
          value={numOfDigits}
          min={0}
          max={9}
          onChange={(e: any) => setNumOfDigits(parseInt(e.target.value, 10))}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <div>{shouldShowResult && compileResults(results)}</div>
    </span>
  )
}

export default SumToNumbers
