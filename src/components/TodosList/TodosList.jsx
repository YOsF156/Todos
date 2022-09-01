import React, { useEffect, useState } from 'react'
import Todo from '../Todo/Todo'
import "./TodosList.css"
import { observer } from 'mobx-react'
import rootStore from '../../stores/main'
// const todos = [{
//     id: 1,
//     title: "go shoping",
//     details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
//     exp: new Date(),
//     done: false,
//     repeat: "daily",
//     preyority: "high"

// },
// {
//     id: 2,
//     title: "sfdgsfdgsfg",
//     details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
//     exp: new Date(),
//     done: true,
//     repeat: "daily",
//     preyority: "high"

// },
// {
//     id: 3,
//     title: "go shddddoping",
//     details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
//     exp: new Date(),
//     done: false,
//     repeat: "daily",
//     preyority: "high"

// }, {
//     id: 4,
//     title: "go shdscsdfsdfdbdoping",
//     details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
//     exp: new Date(),
//     done: true,
//     repeat: "daily",
//     preyority: "high"

// },
// ]
function TodosList() {
    const { setTodos, todos } = rootStore
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

            if (item.id === id) { item.done = !(item.done) }
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