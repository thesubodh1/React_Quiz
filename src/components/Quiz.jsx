import { useState } from "react";

import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png"

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  
  //   sort will not return a new array but edit the existing array

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((previousAnswers) => {
      return [...previousAnswers, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return <div id="summary">
        <img src={quizCompleteImg} alt="trophy icon" />
        <h2>Quiz Completed!</h2>
    </div>
  }

//   The logic is shifetd below as if quiz is completed than they will give error before the if is executed
  const shuffeledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
  shuffeledAnswer.sort(() => Math.random() - 0.5);
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
