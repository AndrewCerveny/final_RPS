
 new Player({name:'user', token:'', wins:0});
player2: var computer = new Player({name:'computer', token:'',wins:0});




class Game {
  constructor(player1,player2) {
    this.player1Wins = player1.wins;
    this.player2Wins = player2.wins;
    this.gameFighters = [];
    this.gameSelection = '';
    this.gameVictor = '';
  }

  winConditions(user.token,computer.token) {
    if(this.gameSelection === 'classic') {
      this.implementsClassicGame(user.token,computer.token);
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
  implementsClassicGame(user.token, computer.token) {
    if(user.token === computer.token) {
      gameRef('draw')
    }else if(user.token === 'rock' && computer.token === 'scissors') {
      this.gameVictor = user.token
      this.player1Wins += 1;
    } else if(user.token === 'rock' && computer.token === 'paper') {
      this.gameVictor = computer.token
      this.player2Wins += 1;
    } else if(user.token === 'paper' && computer.token === 'scissors') {
      this.gameVictor = computer.token
      this.player2Wins += 1;
    } else if(user.token === 'paper' && computer.token === 'rock') {
      this.gameVictor = user.token
      this.player1Wins += 1;
    }else if(user.token === 'scissors' && computer.token === 'rock') {
      this.gameVictor = computer.token
      this.player2Wins += 1;
    } else if(user.token === 'scissors' && computer.token === 'paper') {
      this.gameVictor = user.token
      this.player1Wins += 1;
    }else{
        return `unknown fighter or fighters`
    }
    gameRef(this.gameVictor)
  }
  implementsInjusticeGame(user.token, computer.token) {
    if(user.token === computer.token) {
      gameRef('draw')
    }else if(user.token === 'rock' && computer.token === 'scissors') {
      this.gameVictor = user.token;
      this.player1Wins += 1;
    } else if(user.token === 'rock' && computer.token === 'villain') {
      this.gameVictor = user.token;
      this.player1Wins += 1;
    } else if(user.token === 'rock' && computer.token === 'paper') {
      this.gameVictor = computer.token;
      this.player2Wins += 1;
    } else if(user.token === 'rock' && computer.token === 'hero'){
      this.gameVictor = computer.token;
      this.player2Wins += 1;
    } else if (user.token === 'paper' && computer.token === 'scissors') {
      this.gameVictor = computer.token;
      this.player2Wins += 1;
    } else if (user.token === 'paper' && computer.token === 'villain') {
      this.gameVictor = computer.token;
      this.player2Wins += 1;
    } else if (user.token === 'paper' && computer.token === 'rock') {
      this.gameVictor = user.token;
      this.player1Wins += 1;
    } else if (user.token === 'paper' && computer.token === 'hero') {
      this.gameVictor = user.token
      this.player1Wins += 1;
    } else if (user.token === 'scissors' && computer.token === 'villain') {
      this.gameVictor = user.token;
      this.player1Wins += 1
    } else if (user.token === 'scissors' && computer.token === "paper") {
      this.gameVictor = user.token;
      this.player1Wins += 1
    } else if (user.token === 'scissors' && computer.token === 'hero'){
      this.gameVictor = computer.token;
      this.player2Wins += 1
    } else if (user.token === 'scissors' && computer.token === 'rock'){
      this.gameVictor = computer.token;
      this.player2Wins += 1
    } else if (user.token === 'hero' && computer.token === 'scissors' ){
      this.gameVictor = user.token;
      this.player1Wins += 1
    } else if (user.token === 'hero' && computer.token === 'villain'){
      this.gameVictor = computer.token;
      this.player2Wins += 1
    } else if (user.token === 'hero' && computer.token === 'paper' ) {
      this.gameVictor = computer.token;
      this.player2Wins += 1
    } else if (user.token === 'hero' && computer.token === 'rock'){
      this.gameVictor = user.token;
      this.player1Wins += 1
    } else if (user.token === 'villain' && computer.token === 'scissors') {
      this.gameVictor = computer.token;
      this.player2Wins += 1
    } else if (user.token === 'villain' && computer.token === 'paper') {
      this.gameVictor = user.token;
      this.player1Wins += 1;
    } else if (user.token === 'villain' && computer.token === 'hero'){
      this.gameVictor = user.token;
      this.player1Wins += 1;
    } else if (user.token === 'villain' && computer.token === 'rock') {
      this.gameVictor = computer.token;
      this.player2Wins += 1;
    } else {
      return `Unknown fighter or fighters`
    }
      gameRef(this.gameVictor)
  }
}








// 3 possible
//1 draw: its a draw (chage innter html), 2 user wins( user chosen fighter wins: change HTML) 3 compute wins : ( change html)
