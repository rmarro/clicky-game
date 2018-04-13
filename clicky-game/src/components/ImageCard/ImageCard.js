import React from "react";
import "./ImageCard.css";


class ImageCard extends React.Component {

    handleClick = () => {
        if (this.props.clicked === true) {
            // call the game reset function passed through props
            this.props.gameReset("loss");
        } else {
            // call the setClicked and increaseScore functions passed through props
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
                        <div>{this.props.text}</div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ImageCard;