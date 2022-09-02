import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import FormInput from './FormInput'
import rootStore from '../../stores/main'
import "./Form.css"

function Form({ formData, setFormData }) {
    // const { formShow, hideForm } = rootStore;
    const [values, setValues] = useState(formData?.values);




    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1>{formData?.hl}</h1>
                    {formData?.inputs.map((input) =>

                        <FormInput key={input.placeholder}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange} />



                    )}
                    <div className="btn-part">
                        <input onClick={() => { setValues({}); setFormData("") }} className="btn-form" type="reset" value="ביטול" />
                        <button type="submit" className="btn-form">שמירה</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form