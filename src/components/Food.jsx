import React from "react";
import PropTypes from "prop-types";

function Food(props) {
  return (
    <div><span>Food: </span><span>{props.food}</span></div>
  );
}

Food.propTypes = {
  food: PropTypes.number
};

export default Food;
