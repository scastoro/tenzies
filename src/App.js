import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [gameOver, setGameOver] = React.useState(false);

  function allNewDice() {
    const diceArr = [];
    for (let i = 0; i < 10; i++) {
      diceArr.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArr;
  }
  function getNewDice() {
    setDice(allNewDice());
  }
  function rollDice() {
    setDice((prevDice) => {
      return prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6 + 1) }
      );
    });
  }

  function toggleIsHeld(currentId) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === currentId ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }
  const diceElements = dice.map((die, index) => (
    <Die
      key={die.id}
      value={die.value}
      held={die.isHeld}
      handleHeld={toggleIsHeld}
      id={die.id}
    />
  ));
  function testWin(arr) {
    return arr.every((val, i, array) => val.value === array[0].value);
  }
  React.useEffect(() => {
    setGameOver(testWin(dice));
    console.log(gameOver);
  }, [...dice.map((die) => die.isHeld)]);
  return (
    <main>
      <section className="game-text">
        <h1 className="game-text-heading">Tenzies</h1>
        <p className="game-text-para">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </section>
      <section className="die-container">{diceElements}</section>
      <button
        className="roll-dice-btn"
        onClick={gameOver ? getNewDice : rollDice}
      >
        {gameOver ? "New Game" : "roll"}
      </button>
      {gameOver && <h1>You win</h1>}
      {gameOver && <Confetti width={360} height={400} />}
    </main>
  );
}

export default App;
