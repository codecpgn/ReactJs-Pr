import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const img1 =" https://media.istockphoto.com/id/1307831372/photo/browse-high-resolution-stock-images-of-lord-ganesha.webp?s=612x612&w=is&k=20&c=xV2Vsafc4dcKFkb55t1qH-a14-uH8fy86-4-sQ7VLhA="
const links="http://schapai.com.np/"
const heading ={
    color: "#fa9191"
}

ReactDOM.render(
    <>
<h1 style={heading}> 
Hello guys
</h1>
<h2>
   
    <a href={links} target ="_surya"><img src={img1} alt="ganesha"></img></a>
</h2>
</>,
document.getElementById("root")
);