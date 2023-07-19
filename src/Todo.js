import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
// import { pink } from '@mui/material/colors';

function Todo() {

    let [InputValue, setInputValue] = useState("");
    let[Tasks , setTasks] =useState([]);
    let [textEdit , setTextEdit] = useState(false)
    let [Styles , setStyles] = useState("")
        
    function printSub(e){
        e.preventDefault();
        if(textEdit === false){
            setTasks([...Tasks , InputValue]);
        }
        else{
            Tasks[textEdit] = InputValue
            setTasks(Tasks)
            setTextEdit(false)
        }
    }

    function deletes(e,delIndex){
        e.preventDefault();
        setTasks(Tasks.filter((task , index)=> {return(index!==delIndex)}))
    }
    
    let ClearStyle = {
        textDecoration:"underline"
    }
    
    function EditTexxt(e,EditText){
        e.preventDefault();
        setInputValue(Tasks[EditText])
        setTextEdit(EditText)
    }

    function clear(e ,ClearText){
        e.preventDefault();
        setStyles(ClearStyle)
        
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
                     <li key={index} style={{Styles}} >{task}
                      <a href="/" onClick={(e)=> deletes(e,index)}><DeleteIcon/></a>
                      <a href="/"onClick={(e)=> EditTexxt(e,index)}><EditIcon /></a>
                      <a href="/"onClick={clear}><DoneIcon /></a>
                      
                      </li>)})}
            </ul>
        </>
    )
}

export default Todo