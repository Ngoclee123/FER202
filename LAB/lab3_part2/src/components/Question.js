import React from "react";

const Question = ({ question, selectedAnswer, onAnswerSelect, onSubmit }) => {
  return (
    <div className="question">
      <h2>Question {question.id}</h2>
      <p>{question.question}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedAnswer === option ? "selected" : ""}`}
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="submit-btn"
        onClick={onSubmit}
        disabled={!selectedAnswer}
      >
        Next Question
      </button>
    </div>
  );
};

export default Question;
