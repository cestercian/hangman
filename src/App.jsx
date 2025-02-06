//import react from "react";
import Header from "../components/Header.jsx";
import {languages} from "../langList.jsx";
import ResultBar from "../components/ResultBar.jsx";
import Languages from "../components/Languages.jsx";

function App(){

    let langList = languages.map(language => (
        <Languages
            name = {language.name}
            bgColor = {language.backgroundColor}
            color = {language.color}
        />
    ))

    return (
         <>
             <Header/>
             <ResultBar/>
             <section className="language-chips">
                 {langList}
             </section>
         </>
    )
}

export default App