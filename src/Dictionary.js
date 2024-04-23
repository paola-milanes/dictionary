import React from "react";
import { useState } from "react";
import axios from "axios";
import Results from "./Results"
import Typewriter from "typewriter-effect";
import Photos from "./Photos"
import "./Dictionary.css";

export default function Dictionary(){
    let [keyWord, setKeyword] = useState("")
    let [result, setResult] =useState(null)
    let [photos, setPhotos] = useState(null)

    function handleResponse(response){
        setResult(response.data[0])
        // console.log(response.data[0])
       

    }
    function handlePhotoResponse(response){
      console.log(response)
        setPhotos(response.data.photos)
    }

    function search(event){
        event.preventDefault()
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`
        axios.get(url).then(handleResponse)
        

        let photoApi = "Ih7XXvsTwvavosyYnqNWDmGDqlzJA3IngvPleperdk3o9LEGFCIbG4mF"
        let photoUrl =`https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
        axios.get(photoUrl, {headers:{"Authorization": `${photoApi}`}}).then(handlePhotoResponse);

        
    }
    function handleKeyword(event){
        setKeyword(event.target.value)
}
    return (
      <div className="dic-wrapper">

      <div className="Dictionary">
        <div className="Dictle">
        <h1 className="title"> Dictionary</h1>
        {/* <img classname="image"src={require("./books.jpeg")} alt="books" height={900} width={990}></img> */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString("welcome to the Dictonary!")
            .callFunction(() => {})
            .pauseFor(100)
            .deleteAll()
            //   .loop(true)
            .typeString("search for a word...")
            
            .callFunction(() => {})
            .start();
          }}
          />

        <form className="form" onSubmit={search}>
          <input
            className="input"
            type="search"
            onChange={handleKeyword}
            placeholder="search"
            ></input>
        </form>
            </div>
        <div className="resultsContainer">
        <Results result={result} />
        <Photos photos={photos}></Photos>
        </div>

    
      </div>
            </div>
    );
}