import React from "react";
import "./GameContainer.css";
import ImageCard from "../ImageCard";
import images from "../../images.json";

// import Score from "./components/Score";


class GameContainer extends React.Component {

    state = {
        score: 0
    };

    increaseScore = () => {
        this.setState({
            score: (this.state.score + 1)
        })
    };

    gameOver = () => {
        this.setState({
            score: 0
        })
    }

    render() {
        return (
            <div>
                {/* <Score /> */}
                <h1>Score: {this.state.score}</h1>
                <div className="row">
                    {
                        images.map(image => {
                            return <ImageCard image={image.image} increaseScore={this.increaseScore} gameOver={this.gameOver}/>
                        })
                    }
                </div>
            </div>
        )
    }
};

export default GameContainer;