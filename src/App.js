import React, {useState} from "react";

const state = useState;
console.log(state);


let count = 1;
 const IncNum =() =>{
    
    console.log("clicked" +count++);
 };
const App =() =>{
    return(
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>click me</button>
        </>
    );

};
export default App;