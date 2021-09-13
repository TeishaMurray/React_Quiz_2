import React from 'react'
import '../App.css'

const QuizCard = (props) => {
    // console.log("QuizCard line5", props.question3)
    console.log("QuizCard line5", props)
    // console.log("QuizCard line7", props.quiz[0].question)
    console.log("QuizCard line7", props)
    return (
        <div>
            <div className="quiz-card">
                <h2 className="title">JS Array Methods Quiz</h2>
                <div className="question-block">
                    <h3>{props.quiz.question}</h3>
                </div>
                <div className="answer-btns">
                    {props.quiz.answers.map((answerOptions) => <button className="buttons" onClick={() => props.nextQuestion(answerOptions.isCorrect)}>{answerOptions.answr}</button>)}
                </div>
            </div>
        </div>
    )
}

export default QuizCard