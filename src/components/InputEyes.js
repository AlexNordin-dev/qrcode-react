import React, { useContext, useEffect, useState } from 'react'
import { InputContext } from '../App'
import './InputSize.css';

const InputEyes = () => {
  const [eyes1, setEyes1] = useState('eyeOuter8');
  const [eyes2, setEyes2] = useState('eyeInner1');

  const { inputValue, setInputValue } = useContext(InputContext);

  useEffect(() => {
    setInputValue({ ...inputValue, eyes1: setEyes1 ,eyes2: setEyes2})
  }, [eyes1,eyes2]);

  const optionHandler1 = e => setInputValue({
    ...inputValue, eyes1: e.target.value

  });
  const optionHandler2 = e => setInputValue({
    ...inputValue, eyes2: e.target.value

  });

  return (
    <div>
      <h3 className="labelett">Välj ögon: </h3>
      <label htmlFor="QrDesign1">Ögonmönster utsidan: </label> <br />
      <select type="eyes" onClick={optionHandler1} id="QrDesign1" className='inputSize'>
        <option value="eyeOuter0">Fyrkant ◻</option>
        <option value="eyeOuter1">Cirkel 〇</option>
        <option value="eyeOuter8">Diamant ◇</option>
      </select> <br /><br />

      <label htmlFor="QrDesign2">Ögonmönster insidan: </label> <br />
      <select type="eyes" onClick={optionHandler2} id="QrDesign2" className='inputSize'>
        <option value="eyeInner0">Fyrkant ◼️</option>
        <option value="eyeInner1">Cirkel ⚫</option>
        <option value="eyeInner8">Diamant ◆</option>
      </select>

    </div>
  )
}

export default InputEyes