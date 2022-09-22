var player1 = new Player({name:'user',token:'👨🏽‍💻', wins: 0})
var player2 = new Player({name:'computer', token: '💻', wins:0})

class Game {
  constructor(user,gameChoice) {
    this.trackData = user.wins;
    this.gameSelection = gameChoice;
  }
  winConditions(gameChoice) {
    if(gameChoice === 'classic-board') {
      'rock' > 'Scissors'
      'Paper' > 'Rock'
      'Scissors'> 'Paper'
    }

  }
}


winCondition(gameChoice,selectionPlay1,selectionPlay2) {
if( gameChoice === 'classic-board') {
  // 🗿 > ✂️
  //  ✂️ > 📄
  // 📄 > 🗿











  // constructor(user, computer, gameChoice){
  // this.player1 = new Player(user, 👨🏽‍💻 , 0)
  // this.player2 = new Player(computer, 💻 , 0)
  // this.memory = [player1.wins] || [player2.wins] // what is data
  // this.selection = gameChoice;
