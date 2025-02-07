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
            key={language.name}
        />
    ))

    let wordsArr=[...words.split("")]

    const wordList = wordsArr.map((word,index) => (
        <WordDisplay
            name={word.toUpperCase()}
            key={index}
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
         </>
    )
}

export default App