import React, { useState } from 'react';
import quizData from './Questions';
import './App.css';
import QuizCard from './components/QuizCard';
import ScoreCard from './components/ScoreCard';

function App() {
  const [quizArray, setQuizArray] = useState(quizData)
  const [score, setScore] = useState(0)
  //we want scoreDisplay to be false until quiz is completed
  // console.log("App.js line 11", quizArray)
  // console.log("App.js line 12", quizArray[0].answers[2].isCorrect)


  //add conditional below for array length so that when you run out of questions quiz is complete
  const nextQuestion = (isCorrect) => {
    // if(isCorrect === true){
    //   console.log("correct answer")

    // }
    console.log("we are inside quizCard, we clicked and calling our function from App.js where this console log lives")
    if (quizArray.length >= 2 && isCorrect === true) {
      //so long as the array has at least 1 question left and the answer is correct
        setQuizArray(quizArray.slice(1))
        //^^start the array at the next index/changes the question^^
        setScore(score + 1)
        console.log("correct +1")
      }
      else if (quizArray.length >= 2 && isCorrect !== true){
        setQuizArray(quizArray.slice(1))
        //the answer is incorrect so the score does not increase
        console.log("incorrect")
      }
      else {
        alert("Quiz Completed. Click Refresh to try again.")
        //end of quiz 
      }
  }

  return (
    <div className="app-div">
      <QuizCard
        quiz={quizArray[0]}
        nextQuestion={nextQuestion}
        //^^passign a function as props / lifting state^^
      />
    <div className="score-card">
      <ScoreCard scoreDisplay={score} />
    </div>
      </div>
  );
}

export default App;
