import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuestions,
  addQuestion,
  selectAnswer,
  checkAnswers,
  resetQuiz,
  setCurrentQuestion,
} from "../store/quizSlice";

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, userAnswers, results, currentQuestionId, status } =
    useSelector((state) => state.quiz);

  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [viewMode, setViewMode] = useState("quiz"); // 'quiz' hoặc 'review'

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleAddQuestion = () => {
    if (newQuestion && options.every((opt) => opt) && correctAnswer) {
      dispatch(
        addQuestion({
          id: questions.length + 1,
          question: newQuestion,
          options,
          correctAnswer,
        })
      );
      setNewQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer("");
    }
  };

  const handleSelectAnswer = (questionId, option) => {
    dispatch(selectAnswer({ questionId, option }));
  };

  const handleCheckAnswers = () => {
    dispatch(checkAnswers());
    setViewMode("review");
  };

  const handleResetQuiz = () => {
    dispatch(resetQuiz());
    setViewMode("quiz");
  };

  const handleNavigate = (id) => {
    dispatch(setCurrentQuestion(id));
  };

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (viewMode === "review") {
    return (
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#333",
            color: "white",
            padding: "10px",
          }}
        >
          Quiz Review
        </h1>
        {questions.map((q) => (
          <div
            key={q.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ccc",
              backgroundColor:
                userAnswers[q.id] === q.correctAnswer ? "#d4edda" : "#f8d7da",
            }}
          >
            <p style={{ fontWeight: "bold" }}>
              Q{q.id}: {q.question}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {q.options.map((option, index) => (
                <li key={index} style={{ marginBottom: "5px" }}>
                  <input
                    type="radio"
                    checked={userAnswers[q.id] === option}
                    readOnly
                  />{" "}
                  {option}{" "}
                  {userAnswers[q.id] === option && (
                    <span
                      style={{
                        color: option === q.correctAnswer ? "green" : "red",
                      }}
                    >
                      {option === q.correctAnswer ? "(Correct)" : "(Incorrect)"}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p style={{ color: "#6c757d" }}>
              Right answer is {q.correctAnswer}
            </p>
          </div>
        ))}
        <button
          onClick={handleResetQuiz}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
          }}
        >
          Back to Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#333",
          color: "white",
          padding: "10px",
        }}
      >
        JavaScript Quiz
      </h1>
      {currentQuestion && (
        <div>
          <p style={{ fontWeight: "bold" }}>
            Q{currentQuestion.id}: {currentQuestion.question}
          </p>
          {currentQuestion.options.map((option, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                checked={userAnswers[currentQuestion.id] === option}
                onChange={() => handleSelectAnswer(currentQuestion.id, option)}
              />{" "}
              {option}
            </div>
          ))}
          <div style={{ margin: "10px 0" }}>
            <button
              onClick={() => handleNavigate(1)}
              style={{ padding: "5px 10px", marginRight: "5px" }}
            >
              First
            </button>
            <button
              onClick={() =>
                handleNavigate(
                  currentQuestionId > 1 ? currentQuestionId - 1 : 1
                )
              }
              style={{ padding: "5px 10px", marginRight: "5px" }}
            >
              Prev
            </button>
            <button
              onClick={() =>
                handleNavigate(
                  currentQuestionId < questions.length
                    ? currentQuestionId + 1
                    : questions.length
                )
              }
              style={{ padding: "5px 10px", marginRight: "5px" }}
            >
              Next
            </button>
            <button
              onClick={() => handleNavigate(questions.length)}
              style={{ padding: "5px 10px" }}
            >
              Last
            </button>
          </div>
        </div>
      )}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleCheckAnswers}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            marginRight: "10px",
          }}
        >
          Submit
        </button>
        <button
          onClick={() => setViewMode("review")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#17a2b8",
            color: "white",
            border: "none",
          }}
        >
          Quiz Review
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleAddQuestion}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            marginRight: "10px",
          }}
        >
          Add Question
        </button>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Enter question"
          style={{ width: "70%", padding: "10px", marginRight: "10px" }}
        />
        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          placeholder="Correct Answer"
          style={{ width: "70%", padding: "10px", marginRight: "10px" }}
        />
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
            placeholder={`Option ${index + 1}`}
            style={{
              width: "70%",
              padding: "10px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
