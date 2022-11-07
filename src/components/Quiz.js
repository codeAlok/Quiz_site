import {useEffect, useState} from 'react';

function Quiz({data, setStop, questionNumber, setQuestionNumber}) {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

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
        delay(6000, () => {
            if(a.correct){
                setQuestionNumber(prev=> prev + 1);
                setSelectedAnswer(null);
            }
            else{
                setStop(true);
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