import {useEffect, useState} from 'react';
import useSound from 'use-sound';  // from npm to useSound (react-hooks)
import correct from "../assets/correct.mp3";
import lock from "../assets/lock.mp3";
import wrong from "../assets/wrong.mp3";


function Quiz({data, setStop, questionNumber, setQuestionNumber}) {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    const [letsPlay] = useSound(lock);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(()=> {
        letsPlay();
    }, [letsPlay]);

    useEffect(()=> {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (a)=> {
        setSelectedAnswer(a);
        setClassName("answer active");
        //wait 3sec & check wrong/correct answer
        delay(3000, () => {
            setClassName(a.correct ? "answer correct" : "answer wrong");
        });

        // 3s(animation) + 3s(check) = 6s (stop game/next question)
        delay(5000, () => {
            if(a.correct){
                // play sound & change question or end game after 1sec.
                correctAnswer();
                delay(2000, ()=> {
                    setQuestionNumber(prev=> prev + 1);
                    setSelectedAnswer(null);
                });
            }
            else{
                wrongAnswer();
                delay(2000, ()=> {
                    setStop(true);
                });
            }
        });
    };

    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a)=> (
                    <div className={selectedAnswer === a ? className : "answer"} onClick={()=> handleClick(a)}>
                        {a.text}
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Quiz;