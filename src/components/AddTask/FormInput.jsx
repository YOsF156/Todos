import React, { useState } from 'react'
import { observer } from 'mobx-react'
import "./FormInput.css"


function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="form-input">
            <label >{label}</label>
            {props.type !== "radio" ?
                <input
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={() =>
                        inputProps.name === "confirmPassword" && setFocused(true)
                    }
                    focused={focused.toString()}
                />
                :
                <div className="radio-group">
                    {props.list.map(item => (
                        <div key={item} className="radio-block">
                            <input
                                className="radio-block-input"
                                {...inputProps}
                                id={item}
                                value={item}
                                checked={item === props.value}
                                onChange={onChange}
                                onBlur={handleFocus}
                            />
                            <labal >{item}</labal>
                        </div>
                    ))}
                </div>}
            <span>{errorMessage}</span>
        </div>
    )
}

export default observer(FormInput)