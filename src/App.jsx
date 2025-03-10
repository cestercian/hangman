import clsx from "clsx";
import {useState} from "react";
import Header from "../components/Header.jsx";
import {languages} from "../langList.jsx";
import ResultBar from "../components/ResultBar.jsx";
import Languages from "../components/Languages.jsx";
import WordDisplay from "../components/WordDisplay.jsx";
import KeyBoard from "../components/KeyBoard.jsx";

function App() {
  const [word] = useState("react");
  const [isGuessed, setIsGuessed] = useState(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(new Set());
  //const [wrongGuessCount, setWrongGuessCount] = useState(0);


  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const wrongGuessCount = wrongGuesses.size
  console.log(wrongGuessCount)


  let langList = languages.map((language,index) => (
    <Languages
      name={language.name}
      bgColor={index<wrongGuessCount?"red":language.backgroundColor}
      color={language.color}
      key={language.name}
      //className={index<wrongGuessCount?"chip wrong":"chip"}
    />
  ));

  const wordList = word.split("").map((item, index) => (
    <WordDisplay
      name={isGuessed.has(item) ? item.toUpperCase() : "_"}
      key={index}
    />
  ));

  const alphabetList = alphabet.split("" ).map((item) => {
    const isCorrect = isGuessed.has(item);
    const isWrong = wrongGuesses.has(item);

    return (
      <KeyBoard
        name={item.toUpperCase()}
        insert={() => guessWord(item)}
        className={clsx(
          "p-4 text-white transition-all",
          isCorrect ? "correct" : isWrong ? "wrong" : "bg-gray-500"
        )}
        key={item}
      />
    );
  });


  function guessWord(letter) {
    if (word.includes(letter)) {
      if (!isGuessed.has(letter)) {
        setIsGuessed(prevState => new Set([...prevState, letter]));
      }
    } else {
      if (!wrongGuesses.has(letter)) {
        setWrongGuesses(prevState => new Set([...prevState, letter]));
        //setWrongGuessCount(prevState => prevState + 1);
      }
    }
  }

  return (
    <>
      <Header />
      <ResultBar />
      <section className="language-chips">{langList}</section>
      <section className="word">{wordList}</section>
      <section className="keyboard">{alphabetList}</section>
      <button className="new-game">New Game</button>
    </>
  );
}

export default App;