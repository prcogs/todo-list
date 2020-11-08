// import logo from './logo.svg';
import TodoList from './todo_list'
import NavBar from './navBar'
import FormTask from './formTask'
import './App.css';
import { useEffect, useState } from 'react';

var initTask = [
  {"id" : 1, "title" : "title1", "check" : false},
  {"id" : 2, "title" : "title2", "check" : true},
  {"id" : 3, "title" : "title3", "check" : true}
]

function App() {
  const [filter, setFilter] = useState("all")
  const [taskList, setTaskList] = useState(initTask)
const number = 1
console.log("filter" + number )

  const changeFilter = (value) => {
    setFilter(value)
  }

  //  A REVOIR
  const changeState = (id) => {
    const newList = taskList.map(
      (task) =>
        (task.id === id && { ...task, check: !task.check }) || task
    );

    setTaskList(newList);
  }

  const addTask = (task) => {
    const newTask = {
      "id" : taskList[taskList.length - 1]?.id + 1 || 1,
      "title" : task,
      "check" : false
    }

    const newList = taskList.concat(newTask)
    setTaskList(newList)
  }

  const deleteTask = (id) => {
    const newList = taskList.filter(task => task.id !== id);
    setTaskList(newList)
  }

  return (
    <div className="App">
      <div className="todo">
          #todo
      </div>

      <NavBar filter={filter} 
              changeFilter={changeFilter}/>

      <FormTask addTask={addTask}/>

      <TodoList taskList={taskList} 
                filter={filter} 
                changeState={changeState}
                deleteTask={deleteTask}/>

      <footer>Florian Fort @DevChallenges.io</footer>
    </div>
  );
}

export default App;
