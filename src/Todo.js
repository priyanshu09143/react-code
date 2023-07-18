import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo() {

    let [InputValue, setInputValue] = useState("");
    let[Tasks , setTasks] =useState([]);
        
    function printSub(e){
        e.preventDefault();
        setTasks([...Tasks , InputValue]);
    }

    function deletes(e,delIndex){
        e.preventDefault();
        setTasks(Tasks.filter((task , index)=> {return(index!==delIndex)}))
    }
    
    
    function EditTexxt(e,EditText){
        e.preventDefault();
        setTasks(Tasks.filter((task , index)=> {

            return (index===EditText)
        }))
    }
    return (
        <>
            <form onSubmit={printSub}>
                <input type="text" placeholder='Enter task' value={InputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {Tasks.map((task,index) => {
                     return (
                     <li key={index}>{task}
                      <a href="/" onClick={(e)=> deletes(e,index)}><DeleteIcon/></a>
                      <a href="/"onClick={(e)=> EditTexxt(e,index)}><EditIcon /></a>
                      </li>)})}
            </ul>
        </>
    )
}

export default Todo