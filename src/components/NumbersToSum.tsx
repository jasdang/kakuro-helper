import React, { useState, useReducer, useEffect } from 'react'
// eslint-disable-next-line
import Number from './Number'

type NumbersState = {
  [index: number]: boolean
}

const initialNumbersState: NumbersState = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false
}

type Action = {
  type: string
  payload?: number
}

const numbersReducer = (state: NumbersState, action: Action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, [action.payload!]: !state[action.payload!] }
    case 'reset':
      return initialNumbersState
    default:
      return state
  }
}

export const NumbersContext = React.createContext({})
const NumbersToSum = (): JSX.Element => {
  const [sum, setSum] = useState(0)
  const [shouldRenderSum, setShouldRenderSum] = useState(false)
  const [numbersState, numbersDispatch] = useReducer(
    numbersReducer,
    initialNumbersState
  )

  useEffect(() => {
    // Function definition
    const getSelectedNumbers = (numberObject: NumbersState) => {
      const selectedNumbers: number[] = Object.entries(numberObject)
        .filter((keyValuePair) => keyValuePair[1])
        .map((keyValuePair) => {
          return parseInt(keyValuePair[0], 10)
        })
      return selectedNumbers
    }
    // Execution
    const selectedNumbers = getSelectedNumbers(numbersState)
    setShouldRenderSum(selectedNumbers.length !== 0)
    setSum(selectedNumbers.reduce((acc, val) => acc + val, 0))
    // TODO: Clean up
  }, [numbersState])

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const numberList = numbers.map((num) => <Number number={num} key={num} />)

  const handleReset = () => {
    numbersDispatch({ type: 'reset' })
  }
  return (
    <span>
      <h3>NUMBERS TO SUM</h3>
      <p>This is a calculator to compute the sum of unique numbers.</p>
      <p>Click on a number to add/remove it from the sum.</p>
      <NumbersContext.Provider value={{ numbersState, numbersDispatch }}>
        <div>
          {numberList}
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </NumbersContext.Provider>
      <p>{shouldRenderSum && sum}</p>
    </span>
  )
}

export default NumbersToSum
