import React from "react";
import Tamagotchi from "../models/Tamagotchi.js";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function NewTamagotchi(props) {
  return (
    <div>
      <form>
        <input
          ref="_name"
          type="text"
          id="name"
          placeholder="Tamagotchi name" />
          <input
            ref="_image"
            type="text"
            id="image"
            placeholder="Tamagotchi avatar URL" />
          <Button bsStyle="success" type="submit">Create New Tamagotchi</Button>
      </form>
    </div>
  );
}

export default NewTamagotchi;
