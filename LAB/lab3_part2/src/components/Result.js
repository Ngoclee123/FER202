import React from "react";

const Result = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="result">
      <h2>Quiz Ended</h2>
      <p>
        Your Score: {score} out of {totalQuestions}
      </p>
      <button className="restart-btn" onClick={onRestart}>
        Try Again
      </button>
    </div>
  );
};

export default Result;
