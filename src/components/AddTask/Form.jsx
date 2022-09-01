import React, { useState } from 'react'
import { observer } from 'mobx-react'
import FormInput from './FormInput'
import rootStore from '../../stores/main'
import "./Form.css"

function Form() {
    const { formShow, formData, hideForm } = rootStore;
    const [values, setValues] = useState(formData?.values);


    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            {formShow && <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1>{formData.hl}</h1>
                    {formData.inputs.map((input) => (
                        <FormInput key={input.name}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}

                        />
                    ))}
                    <div className="btn-part">
                        <input onClick={hideForm} className="btn-form" type="reset" value="ביטול" />
                        <button className="btn-form">שמירה</button>
                    </div>
                </form>
            </div>}
        </>
    )
}

export default observer(Form)