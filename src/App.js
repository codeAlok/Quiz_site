import React, { useEffect, useState, useMemo } from "react";
import "./app.css";  // main css file
import Quiz from './components/Quiz';  // Quiz file
import Timer from './components/Timer';  // Timer file

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specilizes in what type of product",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        }
      ]
    },
    {
      id: 2,
      question: "When did the website 'Facebook' launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2002",
          correct: false,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        }
      ]
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Alok kumar",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: true,
        }
      ]
    },
    {
      id: 4,
      question: "Which of the following keywords is used to define a variable in Javascript?",
      answers: [
        {
          text: "var",
          correct: false,
        },
        {
          text: "let",
          correct: false,
        },
        {
          text: "Both A and B",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        }
      ]
    },
    {
      id: 5,
      question: "How can a datatype be declared to be a constant type?",
      answers: [
        {
          text: "const",
          correct: true,
        },
        {
          text: "let",
          correct: false,
        },
        {
          text: "var",
          correct: false,
        },
        {
          text: "constant",
          correct: false,
        }
      ]
    },
    {
      id: 6,
      question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
      answers: [
        {
          text: "boolean",
          correct: false,
        },
        {
          text: "undefined",
          correct: false,
        },
        {
          text: "object",
          correct: true,
        },
        {
          text: "integer",
          correct: false,
        }
      ]
    }
  ];

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "₹ 1,000" },
      { id: 2, amount: "₹ 2,000" },
      { id: 3, amount: "₹ 3,000" },
      { id: 4, amount: "₹ 5,000" },
      { id: 5, amount: "₹ 10,000" },
      { id: 6, amount: "₹ 20,000" },
      { id: 7, amount: "₹ 40,000" },
      { id: 8, amount: "₹ 80,000" },
      { id: 9, amount: "₹ 1,60,000" },
      { id: 10, amount: "₹ 3,20,000" },
      { id: 11, amount: "₹ 6,40,000" },
      { id: 12, amount: "₹ 12,50,000" },
      { id: 13, amount: "₹ 25,00,000" },
      { id: 14, amount: "₹ 50,00,000" },
      { id: 15, amount: "₹ 75,00,000" },
      { id: 16, amount: "₹ 1 CRORE" },
      { id: 17, amount: "₹ 7.5 CRORE" }
    ].reverse(),
    []
  );

  // to set total earned money, before wrong answer
  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ?
          (<h1 className="endText">You earned: {earned}</h1>) : (
            <>
              <div className="top">
                <div className="timer">
                  <Timer setStop={setStop} questionNumber={questionNumber}/>
                </div>
              </div>
              <div className="bottom">
                <Quiz
                  data={data}
                  setStop={setStop}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                />
              </div>
            </>
          )}
      </div>

      <div className="pyramid">
        <ul className="moneyList">

          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default App;
