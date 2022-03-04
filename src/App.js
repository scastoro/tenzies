import React from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  return (
    <main>
      <section className="die-container">
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </section>
    </main>
  );
}

export default App;
