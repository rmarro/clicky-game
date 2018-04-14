import React from "react";
import "./GameContainer.css";
import ImageCard from "../ImageCard";
import Score from "../Score";
import images from "../../images.json";

class GameContainer extends React.Component {

    state = {
        score: 0,
        cards: images,
        highscore: 0,
        message: ""
    };

    // Handle an increase in score from ImageCard if an unclicked card is clicked
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
        if (newScore === 12) {
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

        // Set state to randomized version of cards array
        this.setState({cards: this.randomizeCards(cards)});
    };

    // Get random index, split array, reverse each new array, and concatenate
    randomizeCards = (cards) => {
        const randomNum = Math.floor(Math.random()*cards.length);
        const arr1 = cards.slice(0, randomNum).reverse();
        const arr2 = cards.slice(randomNum).reverse();
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
                {/* Render the first half of the cards in one row (for formatting issues) */}
                <div className="row">
                    {
                        this.state.cards.slice(0, this.state.cards.length/2).map(card => {
                            return <ImageCard id={card.id} clicked={card.clicked} text={card.text} image={card.image} increaseScore={this.increaseScore} setClicked={this.setClicked} gameReset={this.gameReset}/>
                        })
                    }
                </div>
                {/* Render the second half of the cards in another row (for formatting issues) */}
                <div className="row">
                    {
                        this.state.cards.slice(this.state.cards.length/2).map(card => {
                            return <ImageCard id={card.id} clicked={card.clicked} text={card.text} image={card.image} increaseScore={this.increaseScore} setClicked={this.setClicked} gameReset={this.gameReset}/>
                        })
                    }
                </div>
                <div className="github"><a target="_blank" href="https://github.com/rmarro/clicky-game">See you on Github!</a></div>
            </div>
        )
    }
};

export default GameContainer;