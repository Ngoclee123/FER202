import Quiz from "./components/Quiz";

function App() {
  return (
    <div>
      <nav style={{ backgroundColor: "#f8f9fa", padding: "10px" }}>
        <a href="/">Home</a> | <a href="/about">About</a> |{" "}
        <a href="/news">News</a> | <a href="/quiz">Quiz</a> |{" "}
        <a href="/contact">Contact</a>
      </nav>
      <Quiz />
    </div>
  );
}

export default App;
