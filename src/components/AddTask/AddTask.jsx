import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react'
import "./Form.css"
import Form from './Form';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { baseData } from "../../formsData/utility"
import rootStore from '../../stores/main';
import { MainContext } from '../../App';


function AddTask() {
    const { openForm } = rootStore;
    const { setFormData } = useContext(MainContext)
    console.log("🚀 ~ file: AddTask.jsx ~ line 14 ~ AddTask ~ setFormData", setFormData)
    const formAction = () => {
        setFormData({ inputs: baseData.task.inputs, values: baseData.task.values, hl: "הוספת מטלה" })
    }
    return (
        <div className={"add-task add-task-container"} >
            <div className={"add-task-background"} onClick={formAction} >
                <AddTaskIcon />
            </div>
        </div >
    )
}

export default observer(AddTask)