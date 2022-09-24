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















// Event Listeners
classicGameArea.addEventListener('click', oldSchool);
injusticeGameArea.addEventListener('click',royal);
// rockButton.addEventListener('click',)
// paperButton.addEventListener('click',)
// scissorsButton.addEventListener('click',)
// hiddenHeroButton.addEventListener('click',)
// hiddenVillainButton.addEventListener('click',)
// changeGameButton.addEventListerner('click',)






 // functions

function oldSchool() {
  hiddenForm.classList.remove('hidden');
  classicGameArea.classList.add('hidden');
  computerPlayer(classicGameFighters);
}

function royal() {
  oldSchool();
  displayCharacters();
  computerPlayer(superGameFighters);

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










//  variables
var classicGameFighters = ['paper','scissors','rock']
var superGameFighters =['paper','scissors','rock','villian','hero'];
