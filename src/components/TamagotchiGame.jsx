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
    this.increaseSleep = this.increaseSleep.bind(this);
    this.increaseFood = this.increaseFood.bind(this);
    this.increasePlay = this.increasePlay.bind(this);
  }

  displayTimeAlive(birthday) {
    let now = new Moment(new Date());
    let then = new Moment(birthday);
    let stringTime = then.from(now, true);
    return stringTime;
  }

  increaseSleep(sleep) {
    let newSleepState = this.state.sleep;
    newSleepState++;
    this.setState({sleep:newSleepState})
  }

  increaseFood(food) {
    let newFoodState = this.state.food;
    newFoodState++;
    this.setState({food:newFoodState})
  }

  increasePlay(play) {
    let newPlayState = this.state.play;
    newPlayState++;
    this.setState({play:newPlayState})
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
        <h4>Birthday: {newTamagotchi.birthdayFormatted}</h4>
        <h4>Time Alive: {this.state.timeAlive}</h4>
        <Sleep sleep={newTamagotchi.sleep}/>
        <Button bsSize="small" bsStyle="primary" onClick={() => {this.increaseSleep(this.state.sleep)}}>Sleep Tamagotchi</Button>
        <br/>
        <Food food={newTamagotchi.food}/>
        <Button bsSize="small" bsStyle="success" onClick={() => {this.increaseFood(this.state.food)}}>Feed Tamagotchi</Button>
        <br/>
        <Play play={newTamagotchi.play}/>
      <Button bsSize="small" bsStyle="warning" onClick={() => {this.increasePlay(this.state.play)}}>Play With Tamagotchi</Button>
        <br/>
      </div>
    );
  }
}

export default TamagotchiGame;
