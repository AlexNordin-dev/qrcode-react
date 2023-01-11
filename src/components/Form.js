import InputColor from "./InputColor";
import InputSize from "./InputSize";
import './Form.css';

const Form = () => {
    return (
        <div>
            <label htmlFor=""> Your URL:</label> <br />
            <input type="url" placeholder="https://hej.se"></input>

            <div>
                <InputColor />
                <InputSize />
                <button className="btn-skapa color-3">Skapa</button>
            </div>
        </div>

    )
};

export default Form;