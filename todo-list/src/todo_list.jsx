import "./todo-list.css"
import Task from './task'

const TodoList = ({taskList, filter, changeState, deleteTask}) => {

    return(
        // A REVOIR
        <div className="allCheckbox">
            {taskList.map((task) => {
                return (
                (filter === 'all' ||
                    (filter === 'completed' && task.check) ||
                    (filter === 'active' && !task.check)) && (
                    <Task
                    task={task}
                    key={task.id}
                    changeState={changeState}
                    deleteTask={deleteTask}
                    />
                )
                );
            })}
        </div>
    )
}


export default TodoList