import React, { useState } from 'react'
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import Brightness1TwoToneIcon from '@mui/icons-material/Brightness1TwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import "./Todo.css"

function Todo({ title, details, exp, done, handleCheck, id }) {
    const [expand, setExpand] = useState(false)

    const handleExpand = () => {
        console.log("🚀 ~ file: Todo.jsx ~ line 12 ~ handleExpand ~ expand", expand)
        setExpand(!expand)
    }

    return (
        <div id="li" className={done ? "done" : ""}>
            <div className={"task-header"}>
                <div onClick={() => handleCheck(id)} className={"checkbox"}>{done ? <TaskAltTwoToneIcon color="success" /> : <Brightness1TwoToneIcon />}</div>
                <label htmlFor={id} > {title}</label>
                <div className={"action-buttons"}>
                    <DeleteTwoToneIcon color="error" />
                    <DriveFileRenameOutlineTwoToneIcon color='secondary' />
                    <div onClick={handleExpand} className={"is-expand-" + expand}>
                        <ExpandMoreTwoToneIcon color="info" />
                    </div>
                </div>
            </div>
            {expand &&
                <div className="more-details">{details}
                    <span className='expaires'>{` זמן לביצוע: בתאריך- ${exp.getDate() + "/" + (exp.getMonth() + 1)} | בשעה- ${exp.getHours()} `}</span>
                </div>}
        </div>
    )
}

export default Todo