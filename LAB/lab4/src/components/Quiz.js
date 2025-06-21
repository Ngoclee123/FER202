import React, { useState, createContext } from "react";
import { quizData } from "../data";
import Question from "./Question";
import Result from "./Result";
import "./Quiz.css";

export const QuizContext = createContext();

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const contextValue = {
    quizData,
    currentQuestionIndex,
    selectedAnswer,
    handleAnswerSelect,
    handleNextQuestion,
  };

  return (
    <QuizContext.Provider value={contextValue}>
      <div className="quiz-container">
        {showResult ? (
          <Result
            score={score}
            totalQuestions={quizData.length}
            restartQuiz={restartQuiz}
          />
        ) : (
          <Question />
        )}
      </div>
    </QuizContext.Provider>
  );
};

export default Quiz;
