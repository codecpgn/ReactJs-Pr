import React, {useState} from "react";


const App =() =>{
    const [count,setCount] = useState(0);

    
     const IncNum =() =>{
        setCount(count + 1);
       // console.log("clicked" +count++);
     };

    return(
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>click me</button>
        </>
    );

};
export default App;