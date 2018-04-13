import React from "react";
import "./ImageCard.css";


class ImageCard extends React.Component {

    handleClick = () => {
        if (this.props.clicked === true) {
            // call the gameover function passed through props?
            this.props.gameOver();
        } else {
            // call the increasescore function passed through props?
            this.props.setClicked(this.props.id);
            this.props.increaseScore();
        }
    }

    render() {
        return (
            <div>
                <div className="col-md-3">
                    <div className="image-card">
                        <img
                            alt=""
                            src={this.props.image}
                            onClick={this.handleClick}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default ImageCard;