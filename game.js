
// var competitors{
 new Player({name:'user', token:'👨🏽‍💻', wins:0});
player2: var computer = new Player({name:'computer', token:'💻',wins:0});

// }


class Game {
  constructor(player1,player2) {
    this.player1Wins = player1.wins;
    this.player2Wins = player2.wins;
    this.gameFighters = [];
    this.gameSelection = '';
    this.gameVictor = '';
  }

  winConditions(chosenFighter,computerFighter) {
    console.log("THANKYOU", user.chosenFighter)
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
    console.log("BLapp", user.chosenFighter)
    if(chosenFighter === computerFighter) {
      console.log("BLOOP", user.chosenFighter)
      gameRef('draw')
      return
    }

    if(chosenFighter === 'rock' && computerFighter === 'scissors') {
        this.gameVictor = chosenFighter
        this.player1Wins += 1;
        } else if (chosenFighter === 'rock' && computerFighter === 'paper') {
        this.gameVictor = computerFighter
        this.player2Wins += 1;
        } else if (chosenFighter === 'paper' && computerFighter === 'scissors') {
        this.gameVictor = computerFighter
        this.player2Wins += 1;
        } else if (chosenFighter === 'paper' && computerFighter === 'rock') {
        this.gameVictor = chosenFighter
        this.player1Wins += 1;
        }else if (chosenFighter === 'scissors' && computerFighter === 'rock') {
        this.gameVictor = computerFighter
        this.player2Wins += 1;
      } else if (chosenFighter === 'scissors' && computerFighter === 'paper') {
        this.gameVictor = chosenFighter
        this.player1Wins += 1;
      }else{
        return `unknown fighter or fighters`
      }
      gameRef(this.gameVictor)
    }
  implementsInjusticeGame(chosenFighter, computerFighter) {
      if(chosenFighter === 'rock' && computerFighter === 'scissors') {
        this.player1Wins += 1;
      } else if(chosenFighter === 'rock' && computerFighter === 'villian') {
        this.player1Wins += 1;
      } else if(chosenFighter === 'rock' && computerFighter === 'paper') {
        this.player2Wins += 1;
      } else if(chosenFighter === 'rock' && computerFighter === 'hero'){
      this.player2Wins += 1;
      } else if (chosenFighter === 'rock' && computerFighter === 'rock') {
        this.player1Wins += 0;
        this.player2Wins += 0;
      } else if (chosenFighter === 'paper' && computerFighter === 'scissors') {
        this.player2Wins += 1;
      } else if (chosenFighter === 'paper' && computerFighter === 'villian') {
        this.player2Wins += 1;
      } else if (chosenFighter === 'paper' && computerFighter === 'rock') {
        this.player1Wins += 1;
      } else if (chosenFighter === 'paper' && computerFighter === 'hero') {
        this.player1Wins += 1;
      } else if (chosenFighter === 'paper' && computerFighter === 'paper') {
        this.player1Wins += 0;
        this.player2Wins += 0;
      } else if (chosenFighter === 'scissors' && computerFighter === 'scissors') {
        this.player1Wins += 0;
        this.player2Wins += 0;
      } else if (chosenFighter === 'scissors' && computerFighter === 'villian') {
        this.player1Wins += 1
      } else if (chosenFighter === 'scissors' && computerFighter === "paper") {
        this.player1Wins += 1
      } else if (chosenFighter === 'scissors' && computerFighter === 'hero'){
        this.player2Wins += 1
      } else if (chosenFighter === 'scissors' && computerFighter === 'rock'){
        this.player2Wins += 1
      } else if (chosenFighter === 'hero' && computerFighter === 'scissors' ){
        this.player1Wins += 1
      } else if (chosenFighter === 'hero' && computerFighter === 'villian'){
        this.player2Wins += 1
      } else if (chosenFighter === 'hero' && computerFighter === 'paper' ) {
        this.player2Wins += 1
      } else if (chosenFighter === 'hero' && computerFighter ==='hero') {
        this.player1Wins += 0;
        this.player2Wins += 0;
      } else if (chosenFighter === 'hero' && computerFighter === 'rock'){
        this.player1Wins += 1
      } else if (chosenFighter === 'villian' && computerFighter === 'scissors') {
        this.player2Wins += 1
      } else if (chosenFighter === 'villian' && computerFighter === 'villain') {
        this.player1Wins += 0;
        this.player2Wins += 0;
      } else if (chosenFighter === 'villain' && computerFighter === 'paper') {
        this.player1Wins += 0;
      } else if ( chosenFighter ==='villain' && computerFighter === 'hero'){
        this.player1Wins += 1;
      } else if (chosenFighter === 'villain' && computerFighter === 'rock') {
        this.player2Wins += 1;
      } else {
        return `Unknown fighter or fighters`
      }
      gameRef()
    }
}








// 3 possible
//1 draw: its a draw (chage innter html), 2 user wins( user chosen fighter wins: change HTML) 3 compute wins : ( change html)
