import React,{useState} from "react";
import MCQ from "./json/MCQ.json"
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";

function Quiz() {

    const history = useHistory();
    const dispatch = useDispatch()

    const [answer, setanswer] = useState(-1);

    const counter = useSelector((state) => state.counter)
    const allAns = useSelector((state) => state.allans)

    const len = MCQ.length;

    // const [allAnswers, setallAnswers] = useState({});

    const answerchange = (index) => {
        setanswer(index);

        dispatch({type: "ADD_ANSWER", answer: index, actualAnswer: MCQ[index].Answer, counter: counter});

        // setallAnswers({...allAnswers, [counter]: {
        //     answer : index,
        //     actualAnswer : MCQ[index].Answer
        // }});

        // console.log(allAnswers);
    }

  return (
    <div className="Quiz-question">
      <div className="QuizSection">
        <h3>{counter+1}. {MCQ[counter].Question}</h3>
        <div className="options">
            {MCQ[counter].Options.map((option,index)=>{
                return (
                
                <div className="MCQ" style={
                    {
                        borderColor: answer === index ? '#00ADB5': "transparent",
                        color: answer === index ? '#00ADB5': "black", 
                    }
                } 
                onClick = {() => answerchange(index)}>
                    {option}
                </div>);
            })}

        </div>
        <div className="buttons">
            {counter > 0? <button className="Prev" onClick={() =>{ dispatch({type: "DECREMENT"}); setanswer(-1)}}>Prev</button> : <button className="Prev" onClick={() => history.push("/")}>Go Home</button>}
            {counter < (len-1)? <button className="Next" onClick={() => {dispatch({type: "INCREMENT"}); setanswer(-1)}}>Next</button>: <button className="Next" onClick={() => history.push("/Score")}>Submit</button>}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
