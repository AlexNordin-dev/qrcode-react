import React, { useContext, useEffect, useState } from "react";
import "./InputSize.css";
import { InputContext } from "../App";

/*const InputSize = () => {
  return (
    <div>
      <div className="Text-Storlek">
        <h3>Välj Storlek</h3>
      </div>
      <select className="inputSize" name="size" id="size">
        <option value="100">100x100</option>
        <option value="200">200x200</option>
        <option value="300" selected>
          300x300
        </option>
        <option value="400">400x400</option>
        <option value="500">500x500</option>
        <option value="600">600x600</option>
        <option value="700">700x700</option>
      </select>
    </div>
  );
};
*/

const InputSize = () => {
  const [size, setSize] = useState(500);
  const { inputValue, setInputValue } = useContext(InputContext);

  useEffect(() => {
    setInputValue({ ...inputValue, size: setSize });
  }, [size]);

  const optionHandler = (e) =>
    setInputValue({
      ...inputValue,
      size: e.target.value,
    });

  // Satte select på 300 som default, vi kan ta bort det om ni vill?
  return (
    <div>
      <label htmlFor="storlek">Välj Storlek:</label> <br />
      <select className="inputSize" name="size" id="size">
        <option value="100">100x100</option>
        <option value="200">200x200</option>
        <option value="300" selected>
          300x300
        </option>
        <option value="400">400x400</option>
        <option value="500">500x500</option>
        <option value="600">1000x1000</option>
        <option value="700">3000x3000</option>
      </select>
    </div>
  );
};

export default InputSize;
