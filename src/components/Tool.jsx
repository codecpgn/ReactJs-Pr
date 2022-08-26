import React from "react";
 function Tool(props){
        const name = props.name;
        const tool =props.tool
        return(
            <div>
                <h1> my name is is {name}</h1>
                <p> my tool is is {tool}</p>
            </div>

        )
 }
 export default Tool;
