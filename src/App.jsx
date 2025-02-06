import react from "react";
import Header from "../components/Header.jsx";
import ResultBar from "../components/ResultBar.jsx";

function App(){

    return (
         <>
             <header>
                 <h1>Assembly: Endgame</h1>
                 <p>Guess the word within 8 attempts to keep the
                     programming world safe from Assembly!</p>
             </header>
             <ResultBar/>
         </>
    )
}

export default App