// document QuerySelectors
var classicGameArea = document.querySelector('#classicGame');
var injusticeGameArea = document.querySelector('#superGame');
var hiddenForm = document.querySelector('#fighterForm');
var hiddenHeroButton = document.querySelector('#hiddenHero');
var hiddenVillainButton = document.querySelector('#hiddenVillain');
var rockButton = document.querySelector('#rockBtn');
var paperButton = document.querySelector('#paperBtn');
var scissorsButton = document.querySelector('#scissorsBtn');
var changeGameButton = document.querySelector('#gameSwitch');
var gameAnnouncer = document.querySelector('#changingPhrase')
var userWinsCounter = document.querySelector('#userWins');
var computerWinsCounter = document.querySelector('#computerWins');
var buttonsContainer = document.querySelector('#fightersContainer')
var triggerGame = document.querySelector('#triggerGame')















// Event Listeners
classicGameArea.addEventListener('click', oldSchool);
injusticeGameArea.addEventListener('click',royal);
buttonsContainer.addEventListener('click', function(event) {
  saysShoot(event);
});
triggerGame.addEventListener('click',saysShoot)







// changeGameButton.addEventListerner('click',)






 // functions

function oldSchool() {
  hiddenForm.classList.remove('hidden');
  classicGameArea.classList.add('hidden');
  game.checkingGameType('classic');
  injusticeGameArea.classList.add('hidden');
}

function royal() {
  oldSchool();
  displayCharacters();
  game.checkingGameType('injustice');

}

function displayCharacters(){
hiddenHeroButton.classList.remove('hidden')
hiddenVillainButton.classList.remove('hidden')
}

function computerPlayer(gameFightersArr) {
  var randomIndex = Math.floor(Math.random() * gameFightersArr.length)
  var computerFighter = gameFightersArr[randomIndex]
  return computerFighter
};

function saysShoot(event) {
 user.chosenFighter = event.target.value;
 computer.chosenFighter = computerPlayer(game.gameFighters)
 game.winConditions(user.chosenFighter, computer.chosenFighter);
 updateUserScore()
 updateComputerScore()
 gameRef()
};




  // to change inner text eventually in box that says user selection and computer selection
  //
  // needs to reset game

function gameRef() {
  if(game.player1 ++) {
    gameAnnouncer.innerText = `😄 ${user.chosenFighter} destroyed ${computer.chosenFighter}!😄`
  }else if(game.player2 ++) {
    gameAnnouncer.innerText = `🤬 ${computer.chosenFighter} disembowled ${user.chosenFighter}!🤬`
  }else {
    gameAnnouncer.innerText = `🩻  ${user.chosenFighter} and ${computer.chosenFighter} had equal damage! 🩻 `
  }
}

function updateUserScore() {
userWinsCounter.textContent = `${game.player1}`
}

function updateComputerScore() {
computerWinsCounter.textContent = `${game.player2}`;
}







//  variables
var classicGameFighters = ['paper','scissors','rock']
var superGameFighters =['paper','scissors','rock','villian','hero'];
var user = new Player({name:'user', token:'👨🏽‍💻', wins:0});
var computer = new Player({name:'computer', token:'💻',wins:0});
var game = new Game(user, computer);
