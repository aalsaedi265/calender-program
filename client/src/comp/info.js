
import React from 'react';


export default function Info({task, handleAddTask}){

    function handleSubmit(x){
        x.preventDefault();
    }

    return (

        <div>
          <form onSubmit={handleSubmit}>

            <input type="text"
           id="taks" placeholder="Enter task"
           value={task.task}
           onChange={handleAddTask}
           /> 
              
          </form>
        

        </div>
    )
}