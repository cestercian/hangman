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

    const [igWord,setIgWord] = useState("")
    const [word,setWord] = useState("react")
    const [isActive, setIsActive] = useState(false);
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    let langList = languages.map(language => (
        <Languages
            name = {language.name}
            bgColor = {language.backgroundColor}
            color = {language.color}
            key={language.name}
        />
    ))


    const wordList = igWord.split("").map((word,index) => (
        <WordDisplay
            name={word.toUpperCase()}
            key={index}
        />
    ))


    const alphabetList = alphabet.split("").map( (item) => (
        <KeyBoard
            name={item.toUpperCase()}
            insert={()=>{addLetter(item)}}
            className={clsx(
                "p-4 text-white transition-all",
                isActive ? "bg-blue-500" : "bg-gray-500")}
        />
    ))


    function addLetter(letter){
        if (word.includes(letter)){
            setWord( prevWord =>
                prevWord + letter
            )
            guessWord(letter)
        }
    }


    function guessWord(letter){
        if (word.includes(letter) && !igWord.includes(letter)){
            setIgWord(prevState =>
                prevState + letter
            )
            setIsActive(!isActive)
        }

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