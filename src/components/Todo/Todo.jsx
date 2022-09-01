import React, { useState } from 'react'
import { observer } from 'mobx-react'
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import Brightness1TwoToneIcon from '@mui/icons-material/Brightness1TwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import { baseData } from '../../formsData/utility';
import rootStore from '../../stores/main';
import "./Todo.css"

function Todo({ title, details, date, time, done, handleCheck, _id }) {
    const { openForm, } = rootStore;
    const [expand, setExpand] = useState(false)

    const formAction = (id) => {
        openForm({ inputs: baseData.task.inputs, values: baseData.task.values, hl: "עריכת משימה" })
    }


    const handleExpand = () => {
        setExpand(!expand)
    }

    return (
        <div id="li" className={done ? "done" : ""}>
            <div className="task-header">
                <div onClick={() => handleCheck(_id)} className={"checkbox"}>{done ? <TaskAltTwoToneIcon color="success" /> : <Brightness1TwoToneIcon />}</div>
                <label > {title}</label>
                <div className="action-buttons">
                    <DeleteTwoToneIcon color="error" />
                    <DriveFileRenameOutlineTwoToneIcon onClick={() => formAction(_id)} color='secondary' />
                    <div onClick={handleExpand} className={"is-expand-" + expand}>
                        <ExpandMoreTwoToneIcon color="info" />
                    </div>
                </div>
            </div>
            {expand &&
                <div className="more-details">{details}
                    <span className='expaires'>{` זמן לביצוע: בתאריך- ${date}  | בשעה- ${time} `}</span>
                </div>}

        </div>
    )
}

export default observer(Todo)