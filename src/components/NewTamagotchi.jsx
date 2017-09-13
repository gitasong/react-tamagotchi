import React from "react";
import Tamagotchi from "../models/Tamagotchi.js";
import PropTypes from "prop-types";

function NewTamagotchi(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          placeholder="Enter your Tamagotchi's name" />
        <button type="submit">Create New Tamagotchi</button>
      </form>
    </div>
  );
}

export default NewTamagotchi;
