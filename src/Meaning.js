import React from "react";
import Synonyms from "./Synonyms"
import Example from "./Example";
import "./Meaning.css"

export default function Meaning(props){
    return (
      <div className="Meaning">
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
            return (
              <div key={index}>
                 {definition.definition}
                <br />
                <Synonyms synonyms={definition.synonyms}></Synonyms>
                <span className="example">
                  <Example examples={definition.example}></Example>
                </span>
                {/* <strong>Example:</strong> <em>{definition.example}</em> */}
              </div>
            );


        })}
      </div>
    );
}