// noinspection com.intellij.reactbuddy.ArrayToJSXMapInspection

import {useState} from "react";
import Header from "../components/Header.jsx";
import {countries} from "../langList.jsx";
import ResultBar from "../components/ResultBar.jsx";
import Languages from "../components/Languages.jsx";
import WordDisplay from "../components/WordDisplay.jsx";
import KeyBoard from "../components/KeyBoard.jsx";

function App(){

    const [word] = useState("India")
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"


    let langList = countries.map(language => (
        <Languages
            name = {language.name}
            bgColor = {language.backgroundColor}
            color = {language.color}
            key={language.name}
        />
    ))


    const wordList = word.split("").map((word,index) => (
        <WordDisplay
            name={word.toUpperCase()}
            key={index}
        />
    ))


    const alphabetList = alphabet.split("").map( (item) => (
        <KeyBoard
            name={item.toUpperCase()}
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
             <section className="keyboard">{alphabetList}</section>
             <button className="new-game">New Game</button>
         </>
    )
}

export default App