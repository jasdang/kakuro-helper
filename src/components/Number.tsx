import React, { useContext } from 'react'
// eslint-disable-next-line
import { SelectedNumberContext } from './NumbersToSum'

type NumberProp = {
  number: number
}
const Number = ({ number }: NumberProp): JSX.Element => {
  const selectedNumbersContext: any = useContext(SelectedNumberContext)
  const handleOnClick = () => {
    selectedNumbersContext.selectedNumbersDispatch({
      type: 'toggle',
      payload: number
    })
    console.log(selectedNumbersContext.selectedNumbersState)
  }
  return (
    <button type="button" onClick={handleOnClick}>
      {number}
    </button>
  )
}

export default Number
