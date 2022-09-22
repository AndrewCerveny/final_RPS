class Player {
  constructor(contender) {
    this.name = contender.name;
    this.token = contender.emblem;
    this.wins = contender.wins;
    this.myClick = true;

  }
  takesTurn(){
    if (!this.myClick) {
    return this.myClick = true
    } else {
    this.myClick = false
    }
  }
}




















module.exports = Player;
