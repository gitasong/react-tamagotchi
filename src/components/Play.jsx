import React from "react";
import PropTypes from "prop-types";

function Play(props) {
  return (
    <div><span>Play: </span><span>{props.play}</span></div>
  );
}

Play.propTypes = {
  play: PropTypes.number
};

export default Play;
