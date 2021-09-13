const ScoreCard = (props) => {

console.log("ScoreCard line3", "Current Score", props.scoreDisplay)
    return(
        <div>
            <div className="score-card">
                <h2>Your score</h2>
                <div><span className="actual-score">{props.scoreDisplay}</span><span className="total-score">/10</span></div>
            </div>
        </div>
        
       
    )
}

export default ScoreCard