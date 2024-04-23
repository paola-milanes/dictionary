import React from "react";
import Meaning from "./Meaning"
import Phonetic from "./Phonetic";
import "./Results.css"


export default function Results(props){
    console.log(props.result)
    // console.log(props.result.phonetics[0].audio);

    if (props.result){
        return(
            <div className="Results">
                <div className="word">
                <h2 className="printedWord">{props.result.word}</h2>
                <Phonetic phonetic={props.result.phonetics}/>
                </div>
                {props.result.meanings.map(function(meaning,index){
                 return (<div key={index}>
                    <Meaning meaning={meaning}></Meaning>
                 </div>);
                })}
            </div>
        )

    }else{
        return null;
    }
}