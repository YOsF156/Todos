import React, { useState } from 'react'
import Todo from '../Todo/Todo'
import "./TodosList.css"
import { observer } from 'mobx-react'
import rootStore from '../../stores/main'

function TodosList() {
    const { todos } = rootStore
    const [list, setList] = useState(todos)

    const handleCheck = (id) => {
        const newList = list.map(item => {

            if (item.id === id) { item.done = !(item.done) }
            return item
        })
        setList(newList)
    }
    return (
        <div className="container-todos">
            {list.map((item) => {
                return <Todo key={item.id} handleCheck={handleCheck} {...item} />
            })}
        </div>
    )
}

export default observer(TodosList)