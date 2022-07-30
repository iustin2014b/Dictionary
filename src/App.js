import React, { useEffect, useState, useRef } from 'react';
import './index.css';
import InputWord from './Components/InputWord';

function App() {  
    const [words, setWords] = useState([]);
    const [msg, setMsg] = useState("Enter a word !");

    function handleInputChange() {
        setMsg("Enter a word!")
    }

    function handleButtonClick() {
        let word = document.getElementById("inputBox").value
        let isContained=words.some(item => item === word)
        if (!isContained) {
            setWords((currentWords)=>[...currentWords,word]);
            setMsg("Word "+ word + " added.")
        } else{
            setMsg("Word "+ word + " already exist!")
        }
        document.getElementById("inputBox").value = ""
    }

    return (
        <div className ='mainDiv'>             
            <h1>Dictionary</h1>   
            <InputWord  onClick = {handleButtonClick} onChange = {handleInputChange}  />  
            <p id="msg">{msg}</p>       
         </div>
    )
}

export default App;
