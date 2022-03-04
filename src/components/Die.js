import React from "react";

function Die(props) {
  return (
    <div
      className={"die " + (props.held ? "held" : "")}
      onClick={() => props.handleHeld(props.id)}
    >
      {props.value}
    </div>
  );
}

export default Die;
