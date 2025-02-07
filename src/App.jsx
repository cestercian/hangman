// noinspection com.intellij.reactbuddy.ArrayToJSXMapInspection

import React, {useState} from "react";
import Header from "../components/Header.jsx";
import {languages} from "../langList.jsx";
import ResultBar from "../components/ResultBar.jsx";
import Languages from "../components/Languages.jsx";
import WordDisplay from "../components/WordDisplay.jsx";
import KeyBoard from "../components/KeyBoard.jsx";

function App(){

    const [word,setWord] = useState("React")
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetArr = [...alphabet]
    let wordsArr=[...word.split("")]


    let langList = languages.map(language => (
        <Languages
            name = {language.name}
            bgColor = {language.backgroundColor}
            color = {language.color}
            key={language.name}
        />
    ))


    const wordList = wordsArr.map((word,index) => (
        <WordDisplay
            name={word.toUpperCase()}
            key={index}
        />
    ))


    const alphabetList = alphabetArr.map( (item) => (
        <KeyBoard
            name={item}
        />
    ))

    return (
         <>
             <Header/>
             <ResultBar/>
             <section className="language-chips">
                 {langList}
             </section>
             <section className="word">{wordList}</section>
             <section>{alphabetList}</section>
         </>
    )
}

export default App