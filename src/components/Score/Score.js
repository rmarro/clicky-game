import React from "react";
import "./Score.css";

const Score = (props) => 
<div className="scores">
    <div className="row">
        <div className="col-md-4 score">
            <div>Score: {props.score}</div>
        </div>
        <div className="col-md-4 message">
            <div>{props.message}</div>
        </div>
        <div className="col-md-4 highscore">
            <div>High Score: {props.highscore}</div>
        </div>
    </div>
</div>;
export default Score;

