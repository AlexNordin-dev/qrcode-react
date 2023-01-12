import React, { useState } from 'react'
import { ChromePicker } from 'react-color';
import './Color.css';

const InputColor = () => {
    const [color, setColor] = useState('#054080');
    const[ColorPicker, setColorPicker] = useState(false);

    const handleChange = color => setColor(color.hex);

    return (
        <div>
            <label className="Text">
            Välj färg
            </label>
            <div className="Show">
                <div
                onClick={() => setColorPicker(!ColorPicker)}
                style={{ background: color }}
                className="color"></div>
                <span>{color}</span>
            </div>
            {
                ColorPicker && (
                <div className="colorpanel"> 
                    <ChromePicker color={color} onChange={handleChange}/>
                </div>
                )
            }
            </div>
    )
}

export default InputColor;