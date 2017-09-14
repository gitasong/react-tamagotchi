import Moment from "moment";

class Tamagotchi {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.sleep = 15;
    this.food = 5;
    this.play = 20;
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
