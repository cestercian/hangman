import react from "react";
import Header from "../components/Header.jsx";
import {languages} from "../langList.jsx";
import ResultBar from "../components/ResultBar.jsx";
import Languages from "../components/Languages.jsx";

function App(){

    let langs = languages.map(language => ({
        name : language.name,
        bgColor : language.backgroundColor,
        color : language.color,
    }))

    console.log(langs)

    return (
         <>
             <Header/>
             <ResultBar/>
             <Languages

             />
         </>
    )
}

export default App