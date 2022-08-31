import React, { useState } from 'react'
import Todo from '../Todo/Todo'
import "./TodosList.css"
const todos = [{
    id: 1,
    title: "go shoping",
    details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
    exp: new Date(),
    done: false,
    repeat: "daily",
    preyority: "high"

},
{
    id: 2,
    title: "sfdgsfdgsfg",
    details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
    exp: new Date(),
    done: true,
    repeat: "daily",
    preyority: "high"

},
{
    id: 3,
    title: "go shddddoping",
    details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
    exp: new Date(),
    done: false,
    repeat: "daily",
    preyority: "high"

}, {
    id: 4,
    title: "go shdscsdfsdfdbdoping",
    details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
    exp: new Date(),
    done: true,
    repeat: "daily",
    preyority: "high"

},
]
function TodosList() {
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

export default TodosList