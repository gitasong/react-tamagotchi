import React from "react";
import Moment from "moment";

import Tamagotchi from "../models/Tamagotchi.js";
import Sleep from "./Sleep";
import Food from "./Food";
import Play from "./Play";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

class TamagotchiGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSleeping: false,
      sleep: 20,
      food: 10,
      play: 10,
      timeAlive: this.displayTimeAlive(this.birthday)
    };
  }

  displayTimeAlive(birthday) {
    let now = new Moment(new Date());
    let then = new Moment(birthday);
    let stringTime = then.from(now, true);
    return stringTime;
  }

  render() {
    var newTamagotchi = new Tamagotchi("Charlie", "https://image.flaticon.com/icons/svg/447/447518.svg", this.state.isSleeping, this.state.sleep, this.state.food, this.state.play);

    var avatarStyle = {
      width: "30%"
    }

    return (
      <div>
        <img style={avatarStyle} src={newTamagotchi.image}></img>
        <h2>{newTamagotchi.name}</h2>
        <h4>Birthday: {newTamagotchi.birthday}</h4>
        <h4>Time Alive: {this.state.timeAlive}</h4>
        <Sleep sleep={newTamagotchi.sleep}/>
        <Button>Sleep Tamagotchi</Button>
        <br/>
        <Food food={newTamagotchi.food}/>
        <Button>Feed Tamagotchi</Button>
        <br/>
        <Play play={newTamagotchi.play}/>
        <Button>Play With Tamagotchi</Button>
        <br/>
      </div>
    );
  }
}

export default TamagotchiGame;
