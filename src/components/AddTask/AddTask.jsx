import React, { useContext, } from 'react'
import { observer } from 'mobx-react'
import "./Form.css"
import AddTaskIcon from '@mui/icons-material/AddTask';
import { baseData } from "../../formsData/utility"
import { MainContext } from '../../App';


function AddTask() {
    const { setFormData } = useContext(MainContext)
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