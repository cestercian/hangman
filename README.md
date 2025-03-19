```md
# Hangman Game

A simple Hangman game built with React.

## Features

- Random word generation
- Letter guessing with visual feedback
- Language-based wrong guess tracking
- Win/Loss detection
- Restart functionality

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/hangman-game.git
   cd hangman-game
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure

```
src/
│── components/
│   ├── Header.jsx
│   ├── ResultBar.jsx
│   ├── Languages.jsx
│   ├── WordDisplay.jsx
│   ├── KeyBoard.jsx
│── utils.jsx
│── langList.jsx
│── App.jsx
```

## How to Play

1. The game selects a random word.
2. Click letters on the virtual keyboard to guess.
3. Correct letters appear in the word.
4. Wrong guesses reduce remaining attempts.
5. Win by guessing all letters correctly.
6. Lose when wrong guesses exceed the limit.

## Technologies Used

- React
- JavaScript
- clsx (for conditional styling)

## Contributing

Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.
```

Let me know if you need any modifications! 🚀