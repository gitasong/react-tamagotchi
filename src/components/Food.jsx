import React from "react";
import PropTypes from "prop-types";

function Food(props) {
  return (
    <span>Food: {props.food}</span>
  );
}

Food.propTypes = {
  food: PropTypes.number
};

export default Food;
