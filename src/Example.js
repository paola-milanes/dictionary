import React from "react";

export default function Example(props){
     if (props.examples) {
       return (
         <div>
           " 
           <em>{props.examples}</em>
           "
         </div>
       ); 
         
     } else {
       return null;
     }
}