import Moment from "moment";

class Tamagotchi {
  constructor(name, image, isSleeping, sleep, food, play) {
    this.name = name;
    this.image = image;
    this.isSleeping = false;
    this.sleep = sleep;
    this.food = food;
    this.play = play;
    this.timeBorn = new Moment().format('MMMM Do YYYY, h:mm:ss a');
    this.timeAlive = "a few seconds";
  }

  setTimeAlive() {
    this.timeAlive = this.timeBorn.fromNow(true);
  }
}

export default Tamagotchi;
