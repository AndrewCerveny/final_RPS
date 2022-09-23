// document QuerySelectors
var classicGame = document.querySelector('#classicGame');
var superGame = document.querySelector('#superGame');
var classicForm = document.querySelector('#classicForm');
var gamesContainer = document.querySelector('#gamesContainer')
var injusticeForm = document.querySelector('#injusticeForm')














// Event Listeners
classicGame.addEventListener('click',oldSchool);








//  functions
function oldSchool() {
  classicForm.classList.remove('hidden');
  classicGame.classList.add('hidden');

}



function computerPlayer(gameFightersArr) {
  var randomIndex = Math.floor(Math.random() * gameFightersArr.length)
  var computerFighter = gameFightersArr[randomIndex]
  return computerFighter
};









//  variables
var classicGameFighters = ['paper','scissors','rock']
var superGameFighters = ['paper','scissors','rock','villian','hero']
