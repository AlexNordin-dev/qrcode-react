import React, { useContext, useEffect, useState } from 'react'
import { InputContext } from '../App';
import './InputSize.css';

const InputSize = () => {
  const [size, setSize] = useState(500); // default value for setSize is 500 pixels.

  const { inputValue, setInputValue } = useContext(InputContext); //context

  useEffect(() => {
    setInputValue({ ...inputValue, size: setSize })
  }, [size]);

  const optionHandler = e => setInputValue({
    ...inputValue, size: e.target.value

  });

  return (
    <div>
    <br />
      <label htmlFor="Storlek" className="labelett">Välja en Storlek:</label> <br />

      <select type="size" onClick={optionHandler} id="Storlek" className='inputSize'>
        <option value="100">100 x 100</option>
        <option value="300">300 x 300</option>
        <option value="500">500 x 500</option>
        <option value="1000">1000 x 1000</option>
        <option value="5000">5000 x 5000</option>
      </select>

    </div>
  )
}

export default InputSize;
