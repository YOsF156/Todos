import React, { useState } from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';
import "./AddTask.css"
import AddTaskForm from './AddTaskForm';

const value = {
    title: "",
    details: "",
    date: "",
    time: "",
    repeat: "",
    priority: "",
};

// const inputs = [
//     {
//         id: 1,
//         name: "title",
//         type: "text",
//         placeholder: "Username",
//         errorMessage:
//             "Username should be 3-16 characters and shouldn't include any special character!",
//         label: "Username",
//         pattern: "^[A-Za-z0-9]{3,16}$",
//         required: true,
//     },
//     {
//         id: 2,
//         name: "email",
//         type: "email",
//         placeholder: "Email",
//         errorMessage: "It should be a valid email address!",
//         label: "Email",
//         required: true,
//     },
//     {
//         id: 3,
//         name: "birthday",
//         type: "date",
//         placeholder: "Birthday",
//         label: "Birthday",
//     },
//     {
//         id: 4,
//         name: "password",
//         type: "password",
//         placeholder: "Password",
//         errorMessage:
//             "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//         label: "Password",
//         pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//         required: true,
//     },
//     {
//         id: 5,
//         name: "confirmPassword",
//         type: "password",
//         placeholder: "Confirm Password",
//         errorMessage: "Passwords don't match!",
//         label: "Confirm Password",
//         pattern: value.password,
//         required: true,
//     },
// ];
export const inputs = [
    {
        id: 1,
        name: "title",
        type: "text",
        placeholder: "כותרת",
        errorMessage:
            "הכותרת חייבת להכיל 3 תווים ועד 20 תווים",
        label: "כותרת",
        pattern: "^.{4,20}$",
        required: true,
    },
    {
        id: 2,
        name: "details",
        type: "text",
        placeholder: "פרטים",
        errorMessage: "צריך להכיל תו אחד ועד 200 תווים",
        label: "פרטים",
        pattern: "^.{1,20}$",
        required: true,
    },
    {
        id: 3,
        name: "date",
        type: "date",
        label: "תאריך",
        required: true,
    },
    {
        id: 4,
        name: "time",
        type: "time",
        label: "שעה",
        required: true,
    },
    {
        id: 4,
        name: "repeat",
        type: "radio",
        label: "חזרתיות",
        list: ["ללא", "יומית", "שבועית", "חודשית"],
        required: true,
    },
    {
        id: 5,
        name: "priority",
        type: "radio",
        label: "עדיפות",
        list: ["נמוכה", "בינונית", "גבוהה"],
        required: true,
    },
];


function AddTask() {
    const [expand, setExpand] = useState(false)

    const handleClose = () => {
        setExpand(false)
    }
    return (
        <div className={"add-task add-task-container" + (expand ? "-expand" : "")} >
            {!expand ?
                <div className={"add-task-background"} onClick={() => setExpand(true)} >
                    <AddTaskIcon />
                </div>
                :
                <AddTaskForm value={value} handleClose={handleClose} inputs={inputs} hl={"הוספת מטלה"} />}

        </div >
    )
}

export default AddTask