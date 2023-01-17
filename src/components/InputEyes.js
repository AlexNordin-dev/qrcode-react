import React, { useContext, useEffect, useState } from 'react'
import { InputContext } from '../App'

const InputEyes = () => {
  const [eyes, setEyes] = useState('');

  const { inputValue, setInputValue } = useContext(InputContext);

  useEffect(() => {
    setInputValue({ ...inputValue, eyes: setEyes })
  }, [eyes]);

  const optionHandler = e => setInputValue({
    ...inputValue, size: e.target.value

  });

  return (
    <div>
      <label htmlFor="QrDesign">Välj en QrDesign</label> <br />

      <select type="eyes" onClick={optionHandler} id="QrDesign">
        <option value="eyeInner0">eyeInner0</option>
        <option value="eyeInner1">eyeInner1</option>
        <option value="eyeInner2">eyeInner2</option>
      </select> <br />

      <select type="eyes" onClick={optionHandler} id="QrDesign">
        <option value="eyeOuter0">eyeOuter0</option>
        <option value="eyeOuter1">eyeOuter1</option>
        <option value="eyeOuter2">eyeOuter2</option>
      </select>

    </div>
  )
}

export default InputEyes