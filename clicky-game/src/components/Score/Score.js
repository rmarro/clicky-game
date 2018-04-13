import React from "react";
import "./Score.css";

const Score = (props) => 
<div className="score">
    <div className="row">
        <div className="col-md-12">
            <h1>High Score: {props.highscore}</h1>
            <h1>Score: {props.score}</h1>
            <h1>{props.message}</h1>
        </div>
    </div>
</div>;
export default Score;

