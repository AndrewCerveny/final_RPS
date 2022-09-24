
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
        //change innertext
        console.log(`rock beats scissors user wins`)
        this.player1 += 1;
        } else if (chosenFighter === 'rock' && computerFighter === 'paper') {
        //change innertext
        console.log(`paper beats rock computer wins`)
        this.player2 += 1;
        } else if ( chosenFighter === 'rock' && computerFighter === 'rock') {
        // change innterText
        console.log(`rock meets rock, no winner`)
        this.player1 += 0;
        this.player2 += 0;
      } else if (chosenFighter === 'paper' && computerFighter === 'scissors') {
        //change inner innterText
        console.log(`scissors beats paper user wins computer wins`)
        this.player2 += 1;
        } else if (chosenFighter === 'paper' && computerFighter === 'rock') {
          // change innertext
          console.log(`paper beats rock user wins`)
        this.player1 += 1;
        } else if (chosenFighter === 'paper' && computerFighter === 'paper') {
          // change innterText
          console.log(`paper meets paper, no winner`)
        this.player1 += 0;
        this.player2 += 0;
      } else if (chosenFighter === 'scissors' && computerFighter === 'rock') {
        // change innertext
        console.log(`rock beats scissor computer wins`)

        this.player2 += 1
      } else if (chosenFighter === 'scissors' && computerFighter === 'paper') {
        // change innertext
        console.log(`scissors beats paper, user wins`)
        this.player1 += 1
      } else if (chosenFighter === 'scissors' && computerFighter === 'scissors') {
        // change innterText
        console.log(`scissors meet scissors, there is a draw`)
        this.player1 += 0;
        this.player2 += 0;
      }else{
        return `unknown fighter or fighters`
      }
    }
  implementsInjusticeGame(chosenFighter, computerFighter) {
      if(chosenFighter === 'rock' && computerFighter === 'scissors') {
      //change innertext
      this.player1 += 1;
      console.log(`rock beats scissors  user wins`)
      } else if(chosenFighter === 'rock' && computerFighter === 'villian') {
        //change innertext
        this.player1 += 1;
        console.log(`rock beats villain user wins`)
      } else if(chosenFighter === 'rock' && computerFighter === 'paper') {
        //change innertext
        this.player2 += 1;
        console.log(`rock losses to computer wins`)
      } else if(chosenFighter === 'rock' && computerFighter === 'hero'){
        //change innertext
        this.player2 += 1;
        console.log(`rock crushed by hero computer wins`)
      } else if (chosenFighter === 'rock' && computerFighter === 'rock') {
        // change innterText
        this.player1 += 0;
        this.player2 += 0;
        console.log(`user- rock computer - rock = draw `)
      } else if (chosenFighter === 'paper' && computerFighter === 'scissors') {
        //change inner innterText
        this.player2 += 1;
        console.log(`computer choose  scissor and beat paper`)
      } else if (chosenFighter === 'paper' && computerFighter === 'villian') {
        //change inner innterText
        this.player2 += 1;
        console.log(`comp villian beat user paper`)
      } else if (chosenFighter === 'paper' && computerFighter === 'rock') {
        // change innertext
        this.player1 += 1;
        console.log(`user wins paper beat rock`)
      } else if (chosenFighter === 'paper' && computerFighter === 'hero') {
      // change innertext
        this.player1 += 1;
        console.log(`user wins paper beat hero`)
      } else if (chosenFighter === 'paper' && computerFighter === 'paper') {
      // change innterText
        this.player1 += 0;
        this.player2 += 0;
        console.log(`user computer draw paper vs paper`)
      } else if (chosenFighter === 'scissors' && computerFighter === 'scissors') {
        // change innterText
        this.player1 += 0;
        this.player2 += 0;
        console.log(`user choose scissor computer choose scissor its a draw`)
      } else if (chosenFighter === 'scissors' && computerFighter === 'villian') {
        // change innertext
        this.player1 += 1
        console.log(`user choose scissor beating villian`)
      } else if (chosenFighter === 'scissors' && computerFighter === "paper") {
        // change innertext
        this.player1 += 1
        console.log(`user choose scissor beating computer paper`)
      } else if (chosenFighter === 'scissors' && computerFighter === 'hero'){
        // change innertext
        this.player2 += 1
        console.log(`computer choose hero smashing scissors`)
      } else if (chosenFighter === 'scissors' && computerFighter === 'rock'){
        // change innertext
        this.player2 += 1
        console.log(`computer choose rock beating user scissor`)
      } else if (chosenFighter === 'hero' && computerFighter === 'scissors' ){
        // change innertext
        this.player1 += 1
        console.log(`user:hero smashes comp: scissor`)
      } else if (chosenFighter === 'hero' && computerFighter === 'villian'){
        // change innertext
        this.player2 += 1
        console.log(`user:hero faced defeat to comp: villian`)
      } else if (chosenFighter === 'hero' && computerFighter === 'paper' ) {
        // change innertext
        this.player2 += 1
        console.log(`user:hero faced defeat to comp: paper`)
      } else if (chosenFighter === 'hero' && computerFighter ==='hero') {
      // change innterText
      this.player1 += 0;
      this.player2 += 0;
      console.log(`U:Hero Com:Hero its a draw`)
      } else if (chosenFighter === 'hero' && computerFighter === 'rock'){
      // change innertext
      this.player1 += 1
      console.log(`user:hero smashes comp: rock`)
      } else if (chosenFighter === 'villian' && computerFighter === 'scissors') {
      // change innertext
      this.player2 += 1
      console.log(`user:villian got stabbed by comp: scissor`)
      } else if (chosenFighter === 'villian' && computerFighter === 'villain') {
      // change innterText
      this.player1 += 0;
      this.player2 += 0;
      console.log(`U:villian Com:Villian its a draw`)
      } else if (chosenFighter === 'villain' && computerFighter === 'paper') {
      // change innterText
      this.player1 += 0;
      console.log(`U:villian burned comp paper`)
      } else if ( chosenFighter ==='villain' && computerFighter === 'hero'){
      // change innterText
      this.player1 += 1;
      console.log(`U:villian defeated com: the hero`)
      } else if (chosenFighter === 'villain' && computerFighter === 'rock') {
        // change innterText
        this.player2 += 1;
        console.log(`U:villian crushed by com: the rock`)
      } else {
        return `Unknown fighter or fighters`
      }
    }
}






// 3 possible
//1 draw: its a draw (chage innter html), 2 user wins( user chosen fighter wins: change HTML) 3 compute wins : ( change html)
