
import React from "react";
import './../styles/App.css';
import { useState } from "react";
const App = () => {
  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
    console.log("clicked")
  }
  return (
    <div>
        {/* Do not remove the main div */}
       <p>Button clicked {count} times</p>
       <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
