class Game {
  constructor(player1,player2) {
    this.player1Wins = player1.wins;
    this.player2Wins = player2.wins;
    this.gameFighters = [];
    this.gameSelection = '';
    this.gameVictor = '';
  }

  winConditions(userToken, computerToken) {
    if(this.gameSelection === 'classic') {
      this.implementsClassicGame(user.token, computer.token);
    }else {
      this.implementsInjusticeGame(user.token,computer.token);
    }
  }
  checkingGameType(gameChoice) {
    if(gameChoice === 'classic') {
      this.gameSelection = 'classic'
      this.gameFighters = ['paper','scissors','rock']
    }else {
      this.gameSelection = 'injustice'
      this.gameFighters = ['paper','scissors','rock','villain','hero']
    }
  }
  implementsClassicGame(userToken, computerToken) {
    if(userToken === computerToken) {
      return gameRef('draw')
    }else if(userToken === 'rock' && computerToken === 'scissors') {
      this.gameVictor = userToken;
      this.player1Wins += 1;
    } else if(userToken === 'rock' && computerToken === 'paper') {
      this.gameVictor = computerToken;
      this.player2Wins += 1;
    } else if(userToken === 'paper' && computerToken === 'scissors') {
      this.gameVictor = computerToken;
      this.player2Wins += 1;
    } else if(userToken === 'paper' && computerToken === 'rock') {
      this.gameVictor = userToken;
      this.player1Wins += 1;
    }else if(userToken === 'scissors' && computerToken === 'rock') {
      this.gameVictor = computerToken;
      this.player2Wins += 1;
    } else if(userToken === 'scissors' && computerToken === 'paper') {
      this.gameVictor = userToken;
      this.player1Wins += 1;
    }else{
        return `unknown fighter or fighters`
    }
    gameRef(this.gameVictor)
  }
  implementsInjusticeGame(userToken, computerToken) {
    if(userToken === computerToken) {
      return gameRef('draw')
    }else if(userToken === 'rock' && computerToken === 'scissors') {
      this.gameVictor = userToken;
      this.player1Wins += 1;
    } else if(userToken === 'rock' && computerToken === 'villain') {
      this.gameVictor = userToken;
      this.player1Wins += 1;
    } else if(userToken === 'rock' && computerToken === 'paper') {
      this.gameVictor = computerToken;
      this.player2Wins += 1;
    } else if(userToken === 'rock' && computerToken === 'hero'){
      this.gameVictor = computerToken;
      this.player2Wins += 1;
    } else if (userToken === 'paper' && computerToken === 'scissors') {
      this.gameVictor = computerToken;
      this.player2Wins += 1;
    } else if (userToken === 'paper' && computerToken === 'villain') {
      this.gameVictor = computerToken;
      this.player2Wins += 1;
    } else if (userToken === 'paper' && computerToken === 'rock') {
      this.gameVictor = userToken;
      this.player1Wins += 1;
    } else if (userToken === 'paper' && computerToken === 'hero') {
      this.gameVictor = userToken
      this.player1Wins += 1;
    } else if (userToken === 'scissors' && computerToken === 'villain') {
      this.gameVictor = userToken;
      this.player1Wins += 1
    } else if (userToken === 'scissors' && computerToken === "paper") {
      this.gameVictor = userToken;
      this.player1Wins += 1
    } else if (userToken === 'scissors' && computerToken === 'hero'){
      this.gameVictor = computerToken;
      this.player2Wins += 1
    } else if (userToken === 'scissors' && computerToken === 'rock'){
      this.gameVictor = computerToken;
      this.player2Wins += 1
    } else if (userToken === 'hero' && computerToken === 'scissors' ){
      this.gameVictor = userToken;
      this.player1Wins += 1
    } else if (userToken === 'hero' && computerToken === 'villain'){
      this.gameVictor = computerToken;
      this.player2Wins += 1
    } else if (userToken === 'hero' && computerToken === 'paper' ) {
      this.gameVictor = computerToken;
      this.player2Wins += 1
    } else if (userToken === 'hero' && computerToken === 'rock'){
      this.gameVictor = userToken;
      this.player1Wins += 1
    } else if (userToken === 'villain' && computerToken === 'scissors') {
      this.gameVictor = computerToken;
      this.player2Wins += 1
    } else if (userToken === 'villain' && computerToken === 'paper') {
      this.gameVictor = userToken;
      this.player1Wins += 1;
    } else if (userToken === 'villain' && computerToken === 'hero'){
      this.gameVictor = userToken;
      this.player1Wins += 1;
    } else if (userToken === 'villain' && computerToken === 'rock') {
      this.gameVictor = computerToken;
      this.player2Wins += 1;
    } else {
      return `Unknown fighter or fighters`
    }
      gameRef(this.gameVictor)
  }
}
