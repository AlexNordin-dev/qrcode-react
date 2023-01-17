import { useContext } from "react";
import InputColor from "./InputColor";
import InputSize from "./InputSize";
import './Form.css';
import { InputContext } from "../App";

const Form = () => {
    const { inputValue, setInputValue } = useContext(InputContext);
    const { getQRCode } = useContext(InputContext);
    const submitHandler = () => getQRCode();


    const inputHandler = e => setInputValue({
        ...inputValue, url: e.target.value

    });
    return (
        <div className="input-Form">

            <div className="div-input">
                <label htmlFor="">Din URL: </label> <br />
                <input type="url" placeholder="https://github.com" className="input-url"
                    value={inputValue.url}
                    onChange={inputHandler}
                />
                <InputColor />
                <InputSize />
            </div>

            <div className="div-btn">
                <button disabled={!inputValue.url} onClick={submitHandler}
                    className="btn-skapa color-3">Skapa</button>
            </div>
        </div>

    )
};

export default Form;