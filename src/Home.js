import React from 'react'
import "./scss/home.scss"

import {useHistory} from "react-router-dom"

function Home() {

    const history = useHistory();

    return (
        <div className="home">
            <div className="quiz-home">
                <h1>Welcome to Quiz</h1>
                <button onClick={() => history.push("/quiz")}>
                    Start Quiz
                </button>
            </div>
        </div>
    )
}

export default Home
