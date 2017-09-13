import React from "react";
import PropTypes from "prop-types";

function Play(props) {
  return (
    <span>Play: {props.play}</span>
  );
}

Play.propTypes = {
  play: PropTypes.number
};

export default Play;
