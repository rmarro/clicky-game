import React from "react";
import "./ImageCard.css";


// will need to change this so state can change for clicked
const ImageCard = (props) => (
<div>
    <div className="col-md-3">
        <div className="image-card">
            <img
                alt=""
                src={props.image}
            />
        </div>
    </div>
</div>
);

export default ImageCard;