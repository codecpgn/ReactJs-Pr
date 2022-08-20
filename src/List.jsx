import React from "react";
import MyName, {MyAdd,MyAge,MyColl} from "./content";
function List(){
    return(
        <>        
        <h2>The example  List item is </h2>
    <ol>
        <li> {MyName} </li>
        <li>{MyAdd}</li>
        <li>{MyAge}</li>
        <li>{MyColl}</li>
        
       

     </ol>
     </>

    )
}
export default List;