import React, {useState} from "react";
import "./app.css";  // main css file
import Quiz from './components/Quiz';  // Quiz file

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);

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
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: true,
        }
      ]
    }
  ];

  const moneyPyramid = [
    {id: 1, amount: "₹ 1,000"},
    {id: 2, amount: "₹ 2,000"},
    {id: 3, amount: "₹ 3,000"},
    {id: 4, amount: "₹ 5,000"},
    {id: 5, amount: "₹ 10,000"},
    {id: 6, amount: "₹ 20,000"},
    {id: 7, amount: "₹ 40,000"},
    {id: 8, amount: "₹ 80,000"},
    {id: 9, amount: "₹ 1,60,000"},
    {id: 10, amount: "₹ 3,20,000"},
    {id: 11, amount: "₹ 6,40,000"},
    {id: 12, amount: "₹ 12,50,000"},
    {id: 13, amount: "₹ 25,00,000"},
    {id: 14, amount: "₹ 50,00,000"},
    {id: 15, amount: "₹ 75,00,000"},
    {id: 16, amount: "₹ 1 CRORE"},
    {id: 17, amount: "₹ 7.5 CRORE"}
  ].reverse();
  
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Quiz 
            data={data} 
            setStop={setStop}
            questionNumber={questionNumber} 
            setQuestionNumber={setQuestionNumber}
          />  
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">

          {moneyPyramid.map((m)=> (
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
