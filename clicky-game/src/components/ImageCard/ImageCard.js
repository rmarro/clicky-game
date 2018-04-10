import React from "react";
import "./ImageCard.css";


// will need to change this so state can change for clicked
class ImageCard extends React.Component {

    state = {
        clicked: false
    };

    handleClick = () => {
        if (this.state.clicked === true) {
            console.log("game over")
        } else {
            this.setState({clicked: true})
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