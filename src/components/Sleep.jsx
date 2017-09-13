import React from "react";
import PropTypes from "prop-types";

function Sleep(props) {
  return (
    <span>Sleep: {props.sleep}</span>
  );
}

Sleep.propTypes = {
  sleep: PropTypes.number
};

export default Sleep;
