import React from "react";

function Die(props) {
  const styles = { backgroundColor: props.held ? "#59e391" : "white" };
  return (
    <div
      style={styles}
      className="die"
      onClick={() => props.handleHeld(props.id)}
    >
      {props.value}
    </div>
  );
}

export default Die;
