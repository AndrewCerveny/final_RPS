
 new Player({name:'user', token:'👨🏽‍💻', wins:0});
player2: var computer = new Player({name:'computer', token:'💻',wins:0});




class Game {
  constructor(player1,player2) {
    this.player1Wins = player1.wins;
    this.player2Wins = player2.wins;
    this.gameFighters = [];
    this.gameSelection = '';
    this.gameVictor = '';
  }

  winConditions(chosenFighter,computerFighter) {
    if(this.gameSelection === 'classic') {
      this.implementsClassicGame(chosenFighter,computerFighter);
    }else {
      this.implementsInjusticeGame(chosenFighter,computerFighter);
    }
  }
  checkingGameType(gameChoice) {
    if(gameChoice === 'classic') {
      this.gameSelection = 'classic'
      this.gameFighters = ['paper','scissors','rock']
    }else {
      this.gameSelection = 'injustice'
      this.gameFighters = ['paper','scissors','rock','villian','hero']
    }
  }
  implementsClassicGame(chosenFighter, computerFighter) {
    if(chosenFighter === computerFighter) {
      gameRef('draw')
    }else if(chosenFighter === 'rock' && computerFighter === 'scissors') {
      this.gameVictor = chosenFighter
      this.player1Wins += 1;
    } else if(chosenFighter === 'rock' && computerFighter === 'paper') {
      this.gameVictor = computerFighter
      this.player2Wins += 1;
    } else if(chosenFighter === 'paper' && computerFighter === 'scissors') {
      this.gameVictor = computerFighter
      this.player2Wins += 1;
    } else if(chosenFighter === 'paper' && computerFighter === 'rock') {
      this.gameVictor = chosenFighter
      this.player1Wins += 1;
    }else if(chosenFighter === 'scissors' && computerFighter === 'rock') {
      this.gameVictor = computerFighter
      this.player2Wins += 1;
    } else if(chosenFighter === 'scissors' && computerFighter === 'paper') {
      this.gameVictor = chosenFighter
      this.player1Wins += 1;
    }else{
        return `unknown fighter or fighters`
    }
    gameRef(this.gameVictor)
  }
  implementsInjusticeGame(chosenFighter, computerFighter) {
    if(chosenFighter === computerFighter) {
      gameRef('draw')
    }else if(chosenFighter === 'rock' && computerFighter === 'scissors') {
      this.gameVictor = chosenFighter;
      this.player1Wins += 1;
    } else if(chosenFighter === 'rock' && computerFighter === 'villian') {
      this.gameVictor = chosenFighter;
      this.player1Wins += 1;
    } else if(chosenFighter === 'rock' && computerFighter === 'paper') {
      this.gameVictor = computerFighter;
      this.player2Wins += 1;
    } else if(chosenFighter === 'rock' && computerFighter === 'hero'){
      this.gameVictor = computerFighter;
      this.player2Wins += 1;
    } else if (chosenFighter === 'paper' && computerFighter === 'scissors') {
      this.gameVictor = computerFighter;
      this.player2Wins += 1;
    } else if (chosenFighter === 'paper' && computerFighter === 'villian') {
      this.gameVictor = computerFighter;
      this.player2Wins += 1;
    } else if (chosenFighter === 'paper' && computerFighter === 'rock') {
      this.gameVictor = chosenFighter;
      this.player1Wins += 1;
    } else if (chosenFighter === 'paper' && computerFighter === 'hero') {
      this.gameVictor = chosenFighter
      this.player1Wins += 1;
    } else if (chosenFighter === 'scissors' && computerFighter === 'villian') {
      this.gameVictor = chosenFighter;
      this.player1Wins += 1
    } else if (chosenFighter === 'scissors' && computerFighter === "paper") {
      this.gameVictor = chosenFighter;
      this.player1Wins += 1
    } else if (chosenFighter === 'scissors' && computerFighter === 'hero'){
      this.gameVictor = computerFighter;
      this.player2Wins += 1
    } else if (chosenFighter === 'scissors' && computerFighter === 'rock'){
      this.gameVictor = computerFighter;
      this.player2Wins += 1
    } else if (chosenFighter === 'hero' && computerFighter === 'scissors' ){
      this.gameVictor = chosenFighter;
      this.player1Wins += 1
    } else if (chosenFighter === 'hero' && computerFighter === 'villian'){
      this.gameVictor = computerFighter;
      this.player2Wins += 1
    } else if (chosenFighter === 'hero' && computerFighter === 'paper' ) {
      this.gameVictor = computerFighter;
      this.player2Wins += 1
    } else if (chosenFighter === 'hero' && computerFighter === 'rock'){
      this.gameVictor = chosenFighter;
      this.player1Wins += 1
    } else if (chosenFighter === 'villian' && computerFighter === 'scissors') {
      this.gameVictor = computerFighter;
      this.player2Wins += 1
    } else if (chosenFighter === 'villain' && computerFighter === 'paper') {
      this.gameVictor = chosenFighter;
      this.player1Wins += 1;
    } else if ( chosenFighter ==='villain' && computerFighter === 'hero'){
      this.gameVictor = chosenFighter;
      this.player1Wins += 1;
    } else if (chosenFighter === 'villain' && computerFighter === 'rock') {
      this.gameVictor = computerFighter;
      this.player2Wins += 1;
    } else {
      return `Unknown fighter or fighters`
    }
      gameRef(this.gameVictor)
  }
}








// 3 possible
//1 draw: its a draw (chage innter html), 2 user wins( user chosen fighter wins: change HTML) 3 compute wins : ( change html)
