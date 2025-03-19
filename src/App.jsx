import clsx from "clsx";
import {useState} from "react";
import Header from "../components/Header.jsx";
import {languages} from "../langList.jsx";
import ResultBar from "../components/ResultBar.jsx";
import Languages from "../components/Languages.jsx";
import WordDisplay from "../components/WordDisplay.jsx";
import KeyBoard from "../components/KeyBoard.jsx";
import {getRandomWord} from "../utlis.jsx";

function App() {

  const [word,setWord] = useState(() => getRandomWord());
  const [isGuessed, setIsGuessed] = useState(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(new Set());

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const wrongGuessCount = wrongGuesses.size
  const isGameWon = word.split("").every(letter => isGuessed.has(letter));
  const isGameLost = wrongGuesses.size >= languages.length - 1
  const isGameOver= isGameWon || isGameLost

  console.log(word)


  let langList = languages.map((language,index) => (
    <Languages
      name={language.name}
      bgColor={language.backgroundColor}
      color={language.color}
      key={language.name}
      className={clsx("chip", { lost: index < wrongGuessCount })}
    />
  ));

  const wordList = word.split("").map((item, index) => {

    const showLetter = isGameOver || isGuessed.has(item)
    return (
        <WordDisplay
            name={ showLetter ? item.toUpperCase() : "_"}
            showLetter = {clsx(isGameLost && !isGuessed.has(item) && "missed-letter")}
            key={index}
        />
    )
  });

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
        isDisable={isGameOver}
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
      }
    }
  }

  function gameStatus(){
    return isGameWon ? 1
        : isGameLost ? 2
            : wrongGuesses.size > 0 && wrongGuesses.size < languages.length - 1 ? 3
                : 0;
  }

  function resetGame() {
    setIsGuessed(new Set())
    setWord(getRandomWord())
    setWrongGuesses(new Set())
  }

  return (
    <>
      <Header />
      <ResultBar
          status={gameStatus()}
          lostLangIndex={wrongGuessCount}
      />
      <section className="language-chips">{langList}</section>
      <section className="word">{wordList}</section>
      <section className="keyboard">{alphabetList}</section>
      {isGameOver && <button className="new-game" onClick={resetGame}>New Game</button>}
    </>
  );
}

export default App;