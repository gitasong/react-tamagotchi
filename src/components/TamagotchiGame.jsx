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

    this.newTamagotchi = new Tamagotchi("Charlie", "https://image.flaticon.com/icons/svg/447/447518.svg", this.state.isSleeping, this.state.sleep, this.state.food, this.state.play);
    this.updateTimeAlive = this.updateTimeAlive.bind(this);
    this.increaseSleep = this.increaseSleep.bind(this);
    this.increaseFood = this.increaseFood.bind(this);
    this.increasePlay = this.increasePlay.bind(this);
  }

  componentDidMount() {
    this.timeAliveChecker = setInterval(() =>
      this.updateTimeAlive(),
      5000
    );
  }

  displayTimeAlive(birthday) {
    let now = new Moment(new Date());
    let then = new Moment(birthday);
    let stringTime = then.from(now, true);
    return stringTime;
  }

  updateTimeAlive() {
    console.log("check");
    let newTimeAlive = this.displayTimeAlive(this.newTamagotchi.birthday);
    this.setState({timeAlive:newTimeAlive})
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
        <img style={avatarStyle} src={this.newTamagotchi.image}></img>
        <h2>{this.newTamagotchi.name}</h2>
        <h4>Birthday: {this.newTamagotchi.birthdayFormatted}</h4>
        <h4>Time Alive: {this.state.timeAlive}</h4>
        <div style={statsGridStyle}>
          <Sleep sleep={this.state.sleep}/>
          <Food food={this.state.food}/>
          <Play play={this.state.play}/>
          <Button bsSize="small" bsStyle="primary" onClick={() => {this.increaseSleep(this.state.sleep)}}>Sleep Tamagotchi</Button>
          <Button bsSize="small" bsStyle="success" onClick={() => {this.increaseFood(this.state.food)}}>Feed Tamagotchi</Button>
          <Button bsSize="small" bsStyle="warning" onClick={() => {this.increasePlay(this.state.play)}}>Play With Tamagotchi</Button>
        </div>
      </div>
    );
  }
}

export default TamagotchiGame;
