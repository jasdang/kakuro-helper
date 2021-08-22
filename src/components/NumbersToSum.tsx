import React, { useState, useReducer, useEffect } from 'react'
// eslint-disable-next-line
import Number from './Number'

type SelectedNumberState = {
  [index: number]: boolean
}

const initialSelectedNumberState: SelectedNumberState = {
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
  payload: number
}

const selectedNumbersReducer = (state: SelectedNumberState, action: Action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, [action.payload]: !state[action.payload] }
    default:
      return state
  }
}

export const SelectedNumberContext = React.createContext({})
const NumbersToSum = (): JSX.Element => {
  const [sum, setSum] = useState(0)
  const [shouldRenderSum, setShouldRenderSum] = useState(false)
  const [selectedNumbersState, selectedNumbersDispatch] = useReducer(
    selectedNumbersReducer,
    initialSelectedNumberState
  )

  useEffect(() => {
    // Function definition
    const getSelectedNumbers = (numberObject: SelectedNumberState) => {
      const result: number[] = Object.entries(numberObject)
        .filter((keyValuePair) => keyValuePair[1])
        .map((keyValuePair) => {
          return parseInt(keyValuePair[0], 10)
        })
      return result
    }
    // Execution
    const selectedNumbers = getSelectedNumbers(selectedNumbersState)
    setShouldRenderSum(selectedNumbers.length !== 0)
    setSum(selectedNumbers.reduce((acc, val) => acc + val, 0))
  }, [selectedNumbersState])

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const numberList = numbers.map((num) => <Number number={num} />)

  return (
    <span>
      <h3>NUMBERS TO SUM</h3>
      <SelectedNumberContext.Provider
        value={{ selectedNumbersState, selectedNumbersDispatch }}
      >
        <div>{numberList}</div>
      </SelectedNumberContext.Provider>
      <p>{shouldRenderSum && sum}</p>
    </span>
  )
}

export default NumbersToSum
