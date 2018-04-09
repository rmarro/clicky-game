import React from "react";
// import "./Title.css";

const Title = props => 
<div>
    <div className="row">
        <div className="col-md-12">
            <h1 className="title">{props.children}</h1>
        </div>
    </div>
</div>;
export default Title;