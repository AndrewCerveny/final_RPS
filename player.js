class Player {
  constructor(contender) {
    this.name = contender.name;
    this.token = '';
    this.wins = contender.wins;
  }
  takesTurn(pickedFighter) {
    if(this.name === 'user') {
      this.token = event.target.value;
      matchUsersChoice()
    }else {
      this.token = computerPlayer(game.gameFighters)
      matchComputerChoice()
    }
  }
}
