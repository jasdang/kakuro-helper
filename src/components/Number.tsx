import React, { useContext } from 'react'
// eslint-disable-next-line
import { NumbersContext } from './NumbersToSum'

type NumberProp = {
  number: number
}
const Number = ({ number }: NumberProp): JSX.Element => {
  const numbersContext: any = useContext(NumbersContext)
  const handleOnClick = () => {
    numbersContext.numbersDispatch({
      type: 'toggle',
      payload: number
    })
  }
  return (
    <button
      type="button"
      onClick={handleOnClick}
      id={`num-${number}`}
      style={
        numbersContext.numbersState[number]
          ? { backgroundColor: 'grey' }
          : undefined
      }
    >
      {number}
    </button>
  )
}

export default Number
