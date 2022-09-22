class Player {
  constructor(user) {
    this.name = user.name;
    this.token = user.token;
    this.wins = user.wins;
    this.warrior = ['Rock','Paper','Scissors']
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
