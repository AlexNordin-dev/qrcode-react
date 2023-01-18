import { useContext } from "react";
import InputColor from "./InputColor";
import InputSize from "./InputSize";
import InputEyes from "./InputEyes";
import { InputContext } from "../App";
import './Form.css';

const Form = () => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const { getQRCode } = useContext(InputContext);
  const submitHandler = () => getQRCode();

  const inputHandler = (e) =>
    setInputValue({
      ...inputValue,
      url: e.target.value,
    });


  return (
    <div className="input-Form">

      <div className="div-input">
        <label htmlFor="inputurl" className="labelett">Din URL: </label> <br />
        <input type="url" placeholder="https://github.com" className="input-url" id="inputurl"
          value={inputValue.url}
          onChange={inputHandler}
        />
        <InputColor />
        <InputSize />
        <InputEyes />
      </div>

      <div className="div-btn">
        <button disabled={!inputValue.url} onClick={submitHandler}
          className="btn-skapa color-3">Skapa</button>
      </div>
    
    </div>

  )

};

export default Form;
