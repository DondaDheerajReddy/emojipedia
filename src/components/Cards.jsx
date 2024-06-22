import React from "react";

function Card(props) {
  return (
    <div className="card">
      <p className="emoji"> {props.emoji} </p>
      <h2 className="title">{props.title}</h2>
      <p className="para"> {props.para} </p>
    </div>
  );
}

export default Card;
