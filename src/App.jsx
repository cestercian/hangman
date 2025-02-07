// noinspection com.intellij.reactbuddy.ArrayToJSXMapInspection

import React, {useState} from "react";
import Header from "../components/Header.jsx";
import {languages} from "../langList.jsx";
import ResultBar from "../components/ResultBar.jsx";
import Languages from "../components/Languages.jsx";
import WordDisplay from "../components/WordDisplay.jsx";

function App(){

    const [words,setWords] = useState("React")

    let langList = languages.map(language => (
        <Languages
            name = {language.name}
            bgColor = {language.backgroundColor}
            color = {language.color}
        />
    ))

    let wordsArr=['h','e','l',"l",'o']


    wordsArr.push(...words)


    const wordList = wordsArr.map(word => (
        <WordDisplay
            name={word.toUpperCase()}
        />
    ))

    return (
         <>
             <Header/>
             <ResultBar/>
             <section className="language-chips">
                 {langList}
             </section>
             <p></p>
             <section className="language-chips">{wordList}</section>
         </>
    )
}

export default App