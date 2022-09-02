import React, { useEffect, useState } from 'react'
import Todo from '../Todo/Todo'
import "./TodosList.css"
import { observer } from 'mobx-react'
import rootStore from '../../stores/main'

function TodosList() {
    const { setTodos, } = rootStore
    const [list, setList] = useState([])


    useEffect(() => {
        async function getTodos() {
            const data = await setTodos();
            setList(data);
        }
        getTodos()
    }, [])


    const handleCheck = (id) => {
        const newList = list.map(item => {
            if (item._id === id) { item.done = !(item.done) }
            return item
        })
        setList(newList)
    }
    return (
        <div className="container-todos">
            {list?.map((item) => {
                return <Todo key={item._id} handleCheck={handleCheck} {...item} />
            })}
        </div>
    )
}

export default observer(TodosList)