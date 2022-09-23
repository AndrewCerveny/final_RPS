// document QuerySelectors
var classicGame = document.querySelector('#classicGame');
var superGame = document.querySelector('#superGame');
var classicForm = document.querySelector('#classicForm');
var gamesContainer = document.querySelector('#gamesContainer')















// Event Listeners
classicGame.addEventListener('click', oldSchool);









//  functions
function oldSchool() {
  classicForm.classList.remove('hidden');
  classicGame.classList.add('hidden');

}

function computerPlayer(gameArr) {
  var randomIndex = Math.floor(Math.random() * gameArr.length)
  var computerFighter = gameArr[randomIndex]
  return computerFighter
};









//  variables
var classicGame = ['paper','scissors','rock']
var superGame = ['paper','scissors','rock','villian','hero']
