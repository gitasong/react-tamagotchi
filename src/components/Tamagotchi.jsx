import React from "react";
import Tamagotchi from "../models/Tamagotchi.js";
import Sleep from "./Sleep";
import Food from "./Food";
import Play from "./Play";

class TamagotchiGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSleeping: false,
      sleep: 20,
      food: 10,
      play: 10
    };
  }

  render() {
    var newTamagotchi = new Tamagotchi("Charlie", "https://image.flaticon.com/icons/svg/447/447518.svg", this.state.isSleeping, this.state.sleep, this.state.food, this.state.play);


    return (
      <div>
        <img src={newTamagotchi.image}></img>
        <h2>{newTamagotchi.name}</h2>
        <Sleep sleep={newTamagotchi.sleep}/>
        <Food food={newTamagotchi.food}/>
        <Play play={newTamagotchi.play}/>
      </div>
    )
  }
}

export default TamagotchiGame;
