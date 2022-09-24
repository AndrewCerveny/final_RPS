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















// Event Listeners
classicGameArea.addEventListener('click', oldSchool);
injusticeGameArea.addEventListener('click',royal);
buttonsContainer.addEventListener('click', function(event) {
  saysShoot(event);
});







// rockButton.addEventListener('click', )
// paperButton.addEventListener('click', function(event))
// scissorsButton.addEventListener('click',)
// hiddenHeroButton.addEventListener('click',)
// hiddenVillainButton.addEventListener('click',)
// changeGameButton.addEventListerner('click',)






 // functions

function oldSchool() {
  hiddenForm.classList.remove('hidden');
  classicGameArea.classList.add('hidden');
  game.checkingGameType('classic');
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
  console.log("HEY", game)
 user.chosenFighter = event.target.value;
 computer.chosenFighter = computerPlayer(game.gameFighters)
 game.winConditions(user.chosenFighter, computer.chosenFighter);
 console.log("WOW", game)
};





  // to change inner text eventually in box that says user selection and computer selection
  // needs to access the + wins values for both user and computer
  // needs to reset game
  // genrates the computer player genenerator




// function event({
//   console.log()
// })






//  variables
var classicGameFighters = ['paper','scissors','rock']
var superGameFighters =['paper','scissors','rock','villian','hero'];
var user = new Player({name:'user', token:'👨🏽‍💻', wins:0});
var computer = new Player({name:'computer', token:'💻',wins:0});
var game = new Game(user, computer);
