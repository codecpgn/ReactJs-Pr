import React, { useState } from "react";

const App =() =>{
    const purple ="#8e44ad";

        const [bg, setBg] = useState(purple);
        const [Name , setName] =useState("Click me")

    const bgChange = () =>{
       // console.log('clicked');
       let newBg = "#34495e";
       setBg(newBg);

       setName("ouch!! 🤷‍♂️🤷‍♂️");
       
    }
    
    const Bgback = () =>{
        setBg(purple);
        setName("return back😒");
    }

    return(
        <>
            <div style={ { backgroundColor:"bg" }}>
                <button onClick = {bgChange} onDoubleClick={Bgback}>{Name}</button>
            </div>
        </>

    );
};
 export default App;