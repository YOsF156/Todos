import React, { useState } from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useForm } from 'react-hook-form';
import "./AddTask.css"


function AddTask() {
    const [expand, setExpand] = useState(false)
    const [radios, setRadios] = useState({ none: true, daily: false, weekly: false, monthly: false, yearly: false })
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className={"add-task add-task-container" + (expand ? "-expand" : "")} >
            {!expand ?
                <div className={"add-task-background"} onClick={() => setExpand(true)} >
                    <AddTaskIcon />
                </div>
                :





                <form className="add-task-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="title" {...register("title", { required: true, maxLength: 30 })} />
                    <input type="text" placeholder="details" {...register("details", { required: true, maxLength: 200 })} />
                    <input type="datetime-local" placeholder="execute" {...register("execute", { required: true })} />

                    <input {...register("repeat", { required: true })} type="radio" value="יומי" />
                    <input {...register("repeat", { required: true })} type="radio" value=" שבועי" />
                    <input {...register("repeat", { required: true })} type="radio" value=" חודשי" />
                    <input {...register("repeat", { required: true })} type="radio" value=" שנתי" />

                    <input {...register("priority", { required: true })} type="radio" value="גבוהה" />
                    <input {...register("priority", { required: true })} type="radio" value="בינונית" />
                    <input {...register("priority", { required: true })} type="radio" value="נמוכה" />

                    <input type="submit" />


                    {/* <form className="add-task-form">
                         <legend>
                        מה היעד הבא...  </legend>
                    <input type="text" placeholder="מה היעד הבא..." name="title" />


                    <input type='text' placeholder="enter details" required />
                    <input type="date" placeholder="תאריך יעד" />
                    <label htmlFor="repeat" className="repeat-label" > חזרתיות</label>
                    <input type="radio" className="btn-check" name="options-outlined" id="daily" autocomplete="off" />
                    <label class="btn btn-outline-success" htmlFor="daily">יומי</label>
                    <input type="radio" className="btn-check" name="options-outlined" id="monthly" autocomplete="off" />
                    <label class="btn btn-outline-success circle"  htmlFor="monthly">חודשי</label> */}

                </form>
            }

        </div >
    )
}

export default AddTask