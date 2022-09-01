import React, { useState } from 'react'
import FormInput from './FormInput'
import "./AddTaskForm.css"
function AddTaskForm({ handleClose, value, hl, inputs }) {
    const [values, setValues] = useState(value);

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form>
                <h1>{hl}</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}

                    />
                ))}
                <div className="btn-part">
                    <input onClick={handleClose} className="btn-form" type="reset" value="ביטול" />
                    <button className="btn-form">שמירה</button>
                </div>
            </form>
        </>
    )
}

export default AddTaskForm