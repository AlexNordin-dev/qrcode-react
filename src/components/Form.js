import InputColor from "./InputColor";
import InputSize from "./InputSize";
import './Form.css';

const Form = () => {
    return (
        <div className="input-Form">

            <div className="div-input">
                <label htmlFor="">Din URL HEJ: </label> <br />
                <input type="url" placeholder="https://github.com" className="input-url"></input>
                <InputColor />
                <InputSize />
            </div>

            <div className="div-btn">
                <button className="btn-skapa color-3">Skapa</button>
            </div>
        </div>

    )
};

export default Form;