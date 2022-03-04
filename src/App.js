import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  function allNewDice() {
    const diceArr = [];
    for (let i = 0; i < 10; i++) {
      diceArr.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: true,
        id: nanoid(),
      });
    }
    return diceArr;
  }
  function rollDice() {
    setDice(allNewDice());
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
      <button className="roll-dice-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
