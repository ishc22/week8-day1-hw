import React, {useState}from 'react'
import Nav from './components/Nav.jsx'
import TodoForm from './components/TodoForm.jsx'

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addToList(task_to_add){
      console.log(task_to_add)
      setTasks([...tasks, task_to_add]);



  }

  return (
    <>
      <Nav/>
      <div className='container bg-warning pb-5'>
          <TodoForm addToList={addToList}/>

          {tasks.map(task =>
          
            <div className="card my-2">
            <div className="card-body form-control text-center">{task.toUpperCase()}</div>
            </div>
            
            )}
      </div>
    </>
  )
}

