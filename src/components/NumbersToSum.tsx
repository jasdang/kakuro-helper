import React, { useState, useReducer } from 'react'
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
  // eslint-disable-next-line
  const [sum, setSum] = useState(0)
  // eslint-disable-next-line
  const [shouldRenderSum, setShouldRenderSum] = useState(false)
  // eslint-disable-next-line
  const [selectedNumbersState, selectedNumbersDispatch] = useReducer(
    selectedNumbersReducer,
    initialSelectedNumberState
  )

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const numberList = numbers.map((num) => <Number number={num} />)

  return (
    <span>
      <h3>NUMBERS TO SUM</h3>
      <SelectedNumberContext.Provider
        value={{ selectedNumbersState, selectedNumbersDispatch }}
      >
        {numberList}
      </SelectedNumberContext.Provider>
      {shouldRenderSum && sum}
    </span>
  )
}

export default NumbersToSum
