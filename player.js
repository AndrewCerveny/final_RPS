class Player {
  constructor(contender) {
    this.name = contender.name;
    this.token = contender.token;
    this.wins = contender.wins;
    this.chosenFighter = '';
  }
  takesTurn(pickedFighter) {
    if(this.name === 'user') {
      this.chosenFighter = event.target.value;
      matchUsersChoice()
    }else {
      this.chosenFighter = computerPlayer(game.gameFighters)
      matchComputerChoice()
    }
  }
}
