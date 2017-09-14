import React from "react";
import Moment from "moment";

import Tamagotchi from "../models/Tamagotchi.js";
import Sleep from "./Sleep";
import Food from "./Food";
import Play from "./Play";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

function SingleTamagotchi(props) {
  var avatarStyle = {
    width: "30%"
  }

  var statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "14% 14% 14%",
    gridTemplateRows: "10%",
    gridGap: "1rem 2%"
  }

  return (
    <div>
      <img style={avatarStyle} src={props.tamagotchi.image}></img>
    <h2>{props.tamagotchi.name}</h2>
  <h4>Birthday: {props.tamagotchi.birthdayFormatted}</h4>
      <h4>Time Alive: {state.timeAlive}</h4>
      <div style={statsGridStyle}>
        <Sleep sleep={props.tamagotchi.sleep}/>
        <Food food={props.tamagotchi.food}/>
        <Play play={props.tamagotchi.play}/>
        <Button bsSize="small" bsStyle="primary" onClick={() => {increaseSleep(props.tamagotchi.sleep)}}>Sleep Tamagotchi</Button>
        <Button bsSize="small" bsStyle="success" onClick={() => {increaseFood(props.tamagotchi.food)}}>Feed Tamagotchi</Button>
        <Button bsSize="small" bsStyle="warning" onClick={() => {increasePlay(props.tamagotchi.play)}}>Play With Tamagotchi</Button>
      </div>
    </div>
  );
}

export default SingleTamagotchi;
