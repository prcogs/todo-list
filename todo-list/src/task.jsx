import Btn from './btn'


const Task = ({task, changeState, deleteTask}) => {

    return ( 
        <div className="task">
            <input type="checkbox" 
                    name={task.title} 
                    checked={task.check}
                    onChange={() => changeState(task.id)}
                    className="checkbox"/>
            <label htlmfor={task.title}>{task.title}</label>
            <Btn deleteTask={deleteTask} id={task.id}/>
        </div>
    )
}

export default Task