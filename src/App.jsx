// noinspection com.intellij.reactbuddy.ArrayToJSXMapInspection
import clsx from "clsx";
import {useState} from "react";
import Header from "../components/Header.jsx";
import {languages} from "../langList.jsx";
import ResultBar from "../components/ResultBar.jsx";
import Languages from "../components/Languages.jsx";
import WordDisplay from "../components/WordDisplay.jsx";
import KeyBoard from "../components/KeyBoard.jsx";

function App(){

    const [word,setword] = useState("react")
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"


    let langList = languages.map(language => (
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
            insert={()=>{addLetter(item)}}
            className={changeColor}
        />
    ))

    function changeColor(){
        return clsx("bg-red-500")
    }

    function addLetter(letter){
        setword((prevWord) =>
            prevWord + letter
        )
    }


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