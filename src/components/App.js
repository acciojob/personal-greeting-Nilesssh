
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState("");
  return (
    <div>
    <label for="name" > Enter your name:</label>
    <input type="text" id="name" onChange={(e)=>setName(e.target.value)}></input>
    {name.length>0?<p>{`Hello ${name}!`}</p>:""}
    </div>
  )
}

export default App
