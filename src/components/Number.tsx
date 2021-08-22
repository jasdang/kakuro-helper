import React, { useContext } from 'react'
// eslint-disable-next-line
import { NumbersContext } from './NumbersToSum'

type NumberProp = {
  number: number
}
const Number = ({ number }: NumberProp): JSX.Element => {
  const numbersContext: any = useContext(NumbersContext)
  const handleOnClick = (e: any) => {
    const prevState = numbersContext.numbersState[number]
    const element = document.getElementById(e.target.id)

    numbersContext.numbersDispatch({
      type: 'toggle',
      payload: number
    })

    // Set simple button style
    if (prevState) {
      element?.removeAttribute('style')
    } else {
      element?.setAttribute('style', 'background-color:grey')
    }
  }
  return (
    <button type="button" onClick={handleOnClick} id={`num-${number}`}>
      {number}
    </button>
  )
}

export default Number
