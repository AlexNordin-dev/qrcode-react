import React, { useContext, useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { InputContext } from "../App";
import "./Color.css";

const InputColor = () => {
  const [color, setColor] = useState("#054080");
  const [ColorPicker, setColorPicker] = useState(false);
  //context
  const { inputValue, setInputValue } = useContext(InputContext);
  useEffect(() => {
    setInputValue({ ...inputValue, color: color });
  }, [color]);

  const handleChange = (color) => setColor(color.hex);

  return (
    <div>
      <label className="Text">
        <h3 className="labelett">Välj färg</h3>
      </label>
      <div className="Show">
        <div
          onClick={() => setColorPicker(!ColorPicker)}
          style={{ background: color }}
          className="color"
        ></div>
        <span>{color}</span>
      </div>
      {ColorPicker && (
        <div className="colorpanel">
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default InputColor;
