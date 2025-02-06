import React, {useState} from "react";
import Header from "../components/Header.jsx";
import {languages} from "../langList.jsx";
import ResultBar from "../components/ResultBar.jsx";
import Languages from "../components/Languages.jsx";
import WordDisplay from "../components/WordDisplay.jsx";

function App(){

    const [wordes,setWords] = useState("React")

    let langList = languages.map(language => (
        <Languages
            name = {language.name}
            bgColor = {language.backgroundColor}
            color = {language.color}
        />
    ))

    let words=['h','e','l',"l",'o']


        words.push(...wordes)

    console.log(words)


    const wordList = words.map(word => (
        <WordDisplay
            name={word}
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