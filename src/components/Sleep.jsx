import React from "react";
import PropTypes from "prop-types";

function Sleep(props) {
  return (
    <div><span>Sleep: </span><span>{props.sleep}</span></div>
  );
}

Sleep.propTypes = {
  sleep: PropTypes.number
};

export default Sleep;
