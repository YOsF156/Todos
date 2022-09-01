import React from 'react'
import { observer } from "mobx-react"
function Header() {
    return (
        <div className="header">
            <div className="headlines">
                <h1>ToDo || !ToDo</h1>
                <h6>!?</h6>
            </div>
        </div>
    )
}

export default observer(Header)