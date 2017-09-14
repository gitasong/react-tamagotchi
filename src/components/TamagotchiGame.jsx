import React from "react";
import Moment from "moment";

import Tamagotchi from "../models/Tamagotchi.js";
import SingleTamagotchi from "./SingleTamagotchi";
import Sleep from "./Sleep";
import Food from "./Food";
import Play from "./Play";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

class TamagotchiGame extends React.Component {

  constructor(props) {
    super(props);
    this.newTamagotchi = new Tamagotchi("Charlie", "https://image.flaticon.com/icons/svg/447/447518.svg");
    this.updateTimeAlive = this.updateTimeAlive.bind(this);
    this.increaseSleep = this.increaseSleep.bind(this);
    this.increaseFood = this.increaseFood.bind(this);
    this.increasePlay = this.increasePlay.bind(this);

    this.state = {
      tamagotchiList: [this.newTamagotchi]
    };

  }

  componentDidMount() {
    this.timeAliveChecker = setInterval(() =>
      this.updateTimeAlive(), 5000
    );
    this.sleepDepriveTamagotchi = setInterval(() =>
      this.decreaseSleep(this.state.sleep),
      60000
    );
    this.starveTamagotchi = setInterval(() =>
      this.decreaseFood(this.state.food),
      30000
    );
    this.boreTamagotchiToDeath = setInterval(() =>
      this.decreasePlay(this.state.play),
      10000
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

  decreaseSleep(sleep) {
    let newSleepState = this.state.sleep;
    if (newSleepState > 0) {
      newSleepState--;
      this.setState({sleep:newSleepState});
    } else {
      alert("Your tamagotchi died from lack of sleep! :(\nRefresh page to play again.")
    }
  }

  decreaseFood(food) {
    let newFoodState = this.state.food;
    if (newFoodState > 0) {
      newFoodState--;
      this.setState({food:newFoodState});
    } else {
      alert("Your tamagotchi died from starvation! :(\nRefresh page to play again.")
    }
  }

  decreasePlay(play) {
    let newPlayState = this.state.play;
    if (newPlayState > 0) {
      newPlayState--;
      this.setState({play:newPlayState})
    } else {
      alert("Your tamagotchi died from lack of attention!  :(\nRefresh page to play again.")
    }
  }

  increaseSleep() {
    let newSleepState = this.state.sleep;
    newSleepState++;
    this.setState({sleep:newSleepState})
  }

  increaseFood() {
    let newFoodState = this.state.food;
    newFoodState++;
    this.setState({food:newFoodState})
  }

  increasePlay() {
    let newPlayState = this.state.play;
    newPlayState++;
    this.setState({play:newPlayState})
  }

  render() {
    return (
      <div>
        {this.state.tamagotchiList.map((tamagotchi, index) =>
          <SingleTamagotchi
          tamagotchi = {tamagotchi}
          key={index}/>
        )}
      </div>
    );
  }
}

export default TamagotchiGame;
