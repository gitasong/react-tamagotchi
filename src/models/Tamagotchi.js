import Moment from "moment";

class Tamagotchi {
  constructor(name, image, isSleeping, sleep, food, play) {
    this.name = name;
    this.image = image;
    this.isSleeping = false;
    this.sleep = sleep;
    this.food = food;
    this.play = play;
    this.birthday = new Moment();
    this.birthdayFormatted = new Moment().format('MMMM Do YYYY, h:mm:ss a');
    // this.timeAlive = this.setTimeAlive();
    // console.log(this.timeAlive);
  }

  // setTimeAlive() {
  //   this.timeAlive = this.birthday.fromNow(true);
  //   console.log(this.timeAlive);
  // }
}

export default Tamagotchi;
