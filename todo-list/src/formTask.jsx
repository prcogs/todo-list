import { useState } from 'react'


const FormTask = ({addTask}) => {
    const [newTask, setNewTask] = useState("")

    return (
        <div>
            <input type="text" name="newTodo" placeholder="add details" value={newTask} onChange={e => setNewTask(e.target.value)} className="input"/>
            <input type="submit" value="Add" onClick={() => {addTask(newTask); setNewTask("")}} className="btn"/>
        </div>
    )
}

export default FormTask