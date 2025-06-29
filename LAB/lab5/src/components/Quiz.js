import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: 2,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
  {
    id: 3,
    question: 'Who wrote "To be, or not to be"?',
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: 1,
  },
];

function Quiz() {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (qid, idx) => {
    setSelected({ ...selected, [qid]: idx });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sc = 0;
    questions.forEach((q) => {
      if (selected[q.id] === q.answer) sc++;
    });
    setScore(sc);
    setSubmitted(true);
  };

  return (
    <Container className="mt-4">
      <h2>Quiz</h2>
      <Form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <Card className="mb-3" key={q.id}>
            <Card.Body>
              <Card.Title>{q.question}</Card.Title>
              {q.options.map((opt, idx) => (
                <Form.Check
                  key={idx}
                  type="radio"
                  label={opt}
                  name={`q${q.id}`}
                  checked={selected[q.id] === idx}
                  onChange={() => handleChange(q.id, idx)}
                  disabled={submitted}
                />
              ))}
            </Card.Body>
          </Card>
        ))}
        {!submitted && <Button type="submit">Submit</Button>}
        {submitted && (
          <h4 className="mt-3">
            Your score: {score}/{questions.length}
          </h4>
        )}
      </Form>
    </Container>
  );
}
export default Quiz;
