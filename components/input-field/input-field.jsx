import React from "react";
import {useState} from "react";
import "./input-field.scss"

const InputField = ({handler}) => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        handler(inputValue);
        setInputValue("");
    }
    return(
        <div>
            <form className="add-form">
                <input type={"text"}
                       id={"newTask"}
                       onChange={handleChange}
                       value={inputValue}
                />
                <button type={"submit"}
                        onClick={handleClick}
                        disabled={!inputValue}
                >Add some task</button>
            </form>
        </div>
    )
};

export default InputField;