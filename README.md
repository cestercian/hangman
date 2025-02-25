# Hangman Game

This is a simple Hangman game built using React. The game allows users to guess letters of a randomly chosen word. If the letter is correct, it is revealed in the word; otherwise, it is counted as a wrong guess.

## Features
- Dynamic rendering of the word with guessed and hidden letters.
- On-screen keyboard for letter input.
- Tracks correct and incorrect guesses.
- Language selection feature (though currently not integrated into gameplay).
- Restart game option.

## Technologies Used
- React
- clsx (for conditional styling)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd hangman-game
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Components Breakdown
- **App.jsx**: The main component that holds the game logic.
- **Header.jsx**: Displays the game header.
- **ResultBar.jsx**: Placeholder for showing game results (win/loss message).
- **Languages.jsx**: Displays language selection options.
- **WordDisplay.jsx**: Renders each letter of the guessed word.
- **KeyBoard.jsx**: Creates the interactive keyboard for letter input.

## How to Play
1. Start the game, and a hidden word will be displayed as underscores (_ _ _ _ _).
2. Click on letters from the on-screen keyboard.
3. Correct guesses will reveal letters in the word.
4. Wrong guesses are tracked, and once the limit is reached, the game ends.
5. Click "New Game" to restart the game.

## Future Enhancements
- Implement word randomization.
- Add difficulty levels.
- Improve UI with animations and better styling.
- Integrate a scoring system.

## Contributing
Feel free to fork the project, make improvements, and submit a pull request!

## License
This project is licensed under the MIT License.

