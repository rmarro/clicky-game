import React from "react";
import "./GameContainer.css";
import ImageCard from "../ImageCard";
import Score from "../Score";
import images from "../../images.json";

// import Score from "./components/Score";


class GameContainer extends React.Component {

    state = {
        score: 0,
        cards: images,
        highscore: 0,
        message: ""
    };

    // Handle an increase in score from ImageCard if unclicked card is clicked
    increaseScore = () => {
        const newScore = this.state.score + 1;
        this.setState({
            score: newScore
        });
        // If new score is 1 (first move), reset message
        if (newScore === 1) {
            this.setState({
                message: ""
            })
        }
        // If the new score is higher than the current high score, make it the new high score
        if (newScore > this.state.highscore) {
            this.setState({
                highscore: newScore
            })
        };
        // If the new score is 8, display win message and reset cards
        if (newScore === 8) {
            this.gameReset("win");
        }
    };

    // When a card is clicked, find it by id and set that card's clicked state to true
    setClicked = (id) => {
        const cards = this.state.cards.slice();
        cards.map(card => {
            if (card.id === id) {
                card.clicked = true;
            };
            return card
        });

        // Set state cards to randomized version of array
        this.setState({cards: this.randomizeCards(cards)});
    };

    randomizeCards = (cards) => {
        // get a random index
        const randomNum = Math.floor(Math.random()*cards.length);
        // split the array at that number and reverse each array
        const arr1 = cards.slice(0, randomNum).reverse();
        const arr2 = cards.slice(randomNum).reverse();
        // concatenate back together
        return arr1.concat(arr2);
    }

    // When game is over: update the message, change all clicked states to false, and reset score
    gameReset = (result) => {
        if (result === "loss") {
            this.setState({
                message: "Already clicked that!"
            })
        };
        if (result === "win"){
            this.setState({
                message: "You won!"
            });
        };
        const cards = this.state.cards.slice();
        cards.map(card => {
            return card.clicked = false
        });
        this.setState({
            score: 0,
            cards: cards
        });
    };

    render() {
        return (
            <div className="gamecontainer">
                <Score highscore={this.state.highscore} score={this.state.score} message={this.state.message} />
                <div className="row">
                    {
                        this.state.cards.map(card => {
                            return <ImageCard id={card.id} clicked={card.clicked} text={card.text} image={card.image} increaseScore={this.increaseScore} setClicked={this.setClicked} gameReset={this.gameReset}/>
                        })
                    }
                </div>
            </div>
        )
    }
};

export default GameContainer;