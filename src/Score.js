import React,{useState,useEffect} from 'react'

import {useSelector,useDispatch} from 'react-redux'
import MCQ from "./json/MCQ.json";

function Score() {

    const score = useSelector(state => state.allans);

    const [total, setTotal] = useState(0);
    const [final, setScore] = useState(0);
    useEffect(() =>
    {
        for(let q in score) {
            if(q.answer === q.actualAnswer)
            {
                setScore(final + 1);
            }
            setTotal(total + 1);
        }
    },[]);

    return (
        <div className="score">
            <div className="container">
                <h1>
                    You Scored
                </h1>
                <p>
                    {final}/{MCQ.length}
                </p>

                <div>
                    <ul>
                        <li>
                            {total} Questions Attemped
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Score
