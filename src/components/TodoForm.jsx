import React  from 'react'

export default function TodoForm({addToList}) {

    function handleClick(event){
        event.preventDefault();
        console.log(event);
        const newTask = event.target.task.value;
        addToList(newTask);
        event.target.task.value = ''; 

    }
        
    return (
        <div>
            <form action="" onSubmit={handleClick}>
                <h1 className='text-center'>To Do List</h1>
                <div className="form-">
                    <input className='form-control' type="text" name="task" placeholder="Enter a task:"/>
                    <input className='form-control btn btn-outline-success my-2' type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}
