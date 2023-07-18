import React, { useState } from 'react'

function Counter() {
    let [counter,setCounter] = useState(0);
    // function inc(){
    //     setCounter(counter + 1);
    // }
    // function dec(){
    //     setCounter(counter - 1);
    // }
  return (
    <>
<button onClick={()=> {if(counter <10) setCounter(counter + 1)}}>Increment</button>

<p>{counter}</p>
<button onClick={()=> {if(counter >0) setCounter(counter - 1)}}>Decrement</button>
    </>
  )
}

export default Counter