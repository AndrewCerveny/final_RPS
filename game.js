
// var competitors{
 new Player({name:'user', token:'👨🏽‍💻', wins:0});
player2: var computer = new Player({name:'computer', token:'💻',wins:0});

// }


class Game {
  constructor(player1,player2) {
    this.player1 = player1.wins;
    this.player2 = player2.wins;
    this.gameFighters = [];
    this.gameSelection = '';
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

        if(chosenFighter === 'rock' && computerFighter === 'scissors') {
        this.player1 += 1;
        } else if (chosenFighter === 'rock' && computerFighter === 'paper') {
        this.player2 += 1;
        } else if ( chosenFighter === 'rock' && computerFighter === 'rock') {
        this.player1 += 0;
        this.player2 += 0;
      } else if (chosenFighter === 'paper' && computerFighter === 'scissors') {
        this.player2 += 1;
        } else if (chosenFighter === 'paper' && computerFighter === 'rock') {
        this.player1 += 1;
        } else if (chosenFighter === 'paper' && computerFighter === 'paper') {
        this.player1 += 0;
        this.player2 += 0;
      } else if (chosenFighter === 'scissors' && computerFighter === 'rock') {
        this.player2 += 1
      } else if (chosenFighter === 'scissors' && computerFighter === 'paper') {
        this.player1 += 1
      } else if (chosenFighter === 'scissors' && computerFighter === 'scissors') {
        this.player1 += 0;
        this.player2 += 0;
      }else{
        return `unknown fighter or fighters`
      }
    }
  implementsInjusticeGame(chosenFighter, computerFighter) {
      if(chosenFighter === 'rock' && computerFighter === 'scissors') {
        this.player1 += 1;
      } else if(chosenFighter === 'rock' && computerFighter === 'villian') {
        this.player1 += 1;
      } else if(chosenFighter === 'rock' && computerFighter === 'paper') {
        this.player2 += 1;
      } else if(chosenFighter === 'rock' && computerFighter === 'hero'){
      this.player2 += 1;
      } else if (chosenFighter === 'rock' && computerFighter === 'rock') {
        this.player1 += 0;
        this.player2 += 0;
      } else if (chosenFighter === 'paper' && computerFighter === 'scissors') {
        this.player2 += 1;
      } else if (chosenFighter === 'paper' && computerFighter === 'villian') {
        this.player2 += 1;
      } else if (chosenFighter === 'paper' && computerFighter === 'rock') {
        this.player1 += 1;
      } else if (chosenFighter === 'paper' && computerFighter === 'hero') {
        this.player1 += 1;
      } else if (chosenFighter === 'paper' && computerFighter === 'paper') {
        this.player1 += 0;
        this.player2 += 0;
      } else if (chosenFighter === 'scissors' && computerFighter === 'scissors') {
        this.player1 += 0;
        this.player2 += 0;
      } else if (chosenFighter === 'scissors' && computerFighter === 'villian') {
        this.player1 += 1
      } else if (chosenFighter === 'scissors' && computerFighter === "paper") {
        this.player1 += 1
      } else if (chosenFighter === 'scissors' && computerFighter === 'hero'){
        this.player2 += 1
      } else if (chosenFighter === 'scissors' && computerFighter === 'rock'){
        this.player2 += 1
      } else if (chosenFighter === 'hero' && computerFighter === 'scissors' ){
        this.player1 += 1
      } else if (chosenFighter === 'hero' && computerFighter === 'villian'){
        this.player2 += 1
      } else if (chosenFighter === 'hero' && computerFighter === 'paper' ) {
        this.player2 += 1
      } else if (chosenFighter === 'hero' && computerFighter ==='hero') {
        this.player1 += 0;
        this.player2 += 0;
      } else if (chosenFighter === 'hero' && computerFighter === 'rock'){
        this.player1 += 1
      } else if (chosenFighter === 'villian' && computerFighter === 'scissors') {
        this.player2 += 1
      } else if (chosenFighter === 'villian' && computerFighter === 'villain') {
        this.player1 += 0;
        this.player2 += 0;
      } else if (chosenFighter === 'villain' && computerFighter === 'paper') {
        this.player1 += 0;
      } else if ( chosenFighter ==='villain' && computerFighter === 'hero'){
        this.player1 += 1;
      } else if (chosenFighter === 'villain' && computerFighter === 'rock') {
        this.player2 += 1;
      } else {
        return `Unknown fighter or fighters`
      }
    }
}






// 3 possible
//1 draw: its a draw (chage innter html), 2 user wins( user chosen fighter wins: change HTML) 3 compute wins : ( change html)
