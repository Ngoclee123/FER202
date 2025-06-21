import React, { useContext } from "react";
import { QuizContext } from "./Quiz";

const Question = () => {
  const {
    quizData,
    currentQuestionIndex,
    selectedAnswer,
    handleAnswerSelect,
    handleNextQuestion,
  } = useContext(QuizContext);

  const question = quizData[currentQuestionIndex];

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{question.question}</p>
      <ul className="options-list">
        {question.answers.map((answer, index) => (
          <li
            key={index}
            className={`option ${selectedAnswer === answer ? "selected" : ""}`}
          >
            <label>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={() => handleAnswerSelect(answer)}
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
};

export default Question;
