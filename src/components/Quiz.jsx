import { useState } from "react";

import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((previousAnswers) => {
      return [...previousAnswers, selectedAnswer];
    });
  }
  return (
    <div id="questions">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
