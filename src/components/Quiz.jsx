import { useState } from "react";

import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const shuffeledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
  shuffeledAnswer.sort(() => Math.random() - 0.5);
  //   sort will not return a new array but edit the existing array

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((previousAnswers) => {
      return [...previousAnswers, selectedAnswer];
    });
  }
  return (
    <div id="quiz">
      <div id="questions">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffeledAnswer.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
