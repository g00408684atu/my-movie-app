import React from "react";

const Content =  ()=>{
    return(
         // A div with the class "text-center" to center the content
        <div className="text-center">
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Content;
