import React from "react";

// import "/.Phonetic.css"

export default function Phonetic(props){
    console.log(props.phonetic[0])
    return (
        <div className="phonetic">
            {props.phonetic[1].text}
            <br />

            <a href={props.phonetic[0].audio} target="blank">
                Listen
            </a>
            
            
        </div>
    )
}