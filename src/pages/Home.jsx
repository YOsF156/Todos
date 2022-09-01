import React from 'react'
import { observer } from 'mobx-react'
import AddTask from '../components/AddTask/AddTask'
import TodosList from '../components/TodosList/TodosList'


function Home() {

    return (
        <div className="page-container">
            <TodosList />
            <AddTask />
        </div>
    )
}

export default observer(Home)