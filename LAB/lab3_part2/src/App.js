import React from "react";
import "./App.css";
import QuizApp from "./components/QuizApp";
import "./components/QuizApp.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quiz App</h1>
      </header>
      <main>
        <QuizApp />
      </main>
    </div>
  );
}

export default App;
