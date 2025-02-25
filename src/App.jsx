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


    const wordList = word.split("").map((item,index) => (
        <WordDisplay
            name={igWord.includes(item) ? item.toUpperCase() : "_"}
            key={index}
        />
    ))


    const alphabetList = alphabet.split("").map( (item) => (
        <KeyBoard
            name={item.toUpperCase()}
            insert={()=>{guessWord(item)}}
            className={clsx(
                "p-4 text-white transition-all",
                isActive ? "bg-blue-500" : "bg-gray-500")}
        />
    ))


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