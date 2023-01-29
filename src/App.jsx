import "./App.css";
import React, { useEffect, useState } from "react";
import Start from "./components/Start.jsx";
import Quiz from "./components/Quiz.jsx";
import { nanoid } from "nanoid";

function App() {
  const [start, setStart] = useState(true);
  const [questions, setQuestions] = useState([{}]);
  const [answers, setAnswers] = useState([]);

  const startGame = () => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((json) => {
        const questions = json.results;
        setQuestions(questions);
      });
    setStart((prev) => !prev);
  };
  const quizQuestion = questions.map((q) => (
    <Quiz
      key={nanoid()}
      correctAnswer={q.correct_answer}
      question={q.question}
      incorrectAnswers={q.incorrect_answers}
    />
  ));

  return (
    <div className="App">
      {start && <Start startGame={startGame} />}
      <div>{quizQuestion}</div>
    </div>
  );
}

export default App;
