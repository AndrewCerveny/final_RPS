class Player {
  constructor(contender) {
    this.name = contender.name;
    this.token = contender.token;
    this.wins = contender.wins;
    this.fighters = ['rock','paper','scissors']
    this.chosenFighter = null; 
    this.myTurn = true;
  }
  takesTurn(){
    if (!this.myTurn) {
      return this.myTurn = true
    } else {
    this.myTurn = true
    }
  }
}
