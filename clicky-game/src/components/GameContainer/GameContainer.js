import React from "react";
import "./GameContainer.css";
import ImageCard from "../ImageCard";
import images from "../../images.json";

// import Score from "./components/Score";


class GameContainer extends React.Component {

    state = {
        score: 0,
        cards: images
    };

    increaseScore = () => {
        this.setState({
            score: (this.state.score + 1)
        })
    };

    setClicked = (i) => {
        const cards = this.state.cards.slice();
        cards[i].clicked = true;
        this.setState({cards: cards});
    };

    gameOver = () => {
        const cards = this.state.cards.slice();
        cards.map(card => {
            return card.clicked = false
        });
        this.setState({
            score: 0,
            cards: cards
        });
        console.log("game over")
    };

    render() {
        return (
            <div>
                {/* <Score /> */}
                <h1>Score: {this.state.score}</h1>
                <div className="row">
                    {
                        this.state.cards.map(card => {
                            return <ImageCard id={card.id} clicked={card.clicked} image={card.image} increaseScore={this.increaseScore} setClicked={this.setClicked} gameOver={this.gameOver}/>
                        })
                    }
                </div>
            </div>
        )
    }
};

export default GameContainer;