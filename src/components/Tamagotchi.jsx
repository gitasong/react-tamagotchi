import React from "react";

class TamagotchiGame exends React.Component {

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
    var newTamagotchi = new Tamagotchi("Charlie", this.state.isSleeping, this.state.sleep, this.state.food, this.state.play);


    return (
      <div>
        <img></img>
        <h2>{newTamagotchi.name}</h2>
        <Sleep sleep={newTamagotchi.sleep}/>
        <Food food={newTamagotchi.food}/>
        <Play play={newTamagotchi.play}/>
      </div>
    )
  }
}
