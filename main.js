// document QuerySelectors
var classicGameArea = document.querySelector('#classicGame');
var injusticeGameArea = document.querySelector('#superGame');
var hiddenForm = document.querySelector('#fighterForm');
var hiddenHeroButton = document.querySelector('#hiddenHero');
var hiddenVillainButton = document.querySelector('#hiddenVillain');
var changeGameButton = document.querySelector('#gameSwitch');
var gameAnnouncer = document.querySelector('#changingPhrase')
var userWinsCounter = document.querySelector('#userWins');
var computerWinsCounter = document.querySelector('#computerWins');
var characterButtons = document.querySelector("#charactersContainer");
var userFighterDisplay = document.querySelector('#UserFighterExhibit');
var computerFighterDisplay = document.querySelector('#CompFighterExhibit');
var winnerDisplay = document.querySelector('#champDisplay')
var newGame = document.querySelector('#reset')














// Event Listeners
changeGameButton.addEventListener('click', backHome)
classicGameArea.addEventListener('click', oldSchool);
injusticeGameArea.addEventListener('click',royal);
characterButtons.addEventListener('click', function(event) {
user.takesTurn(event)
computer.takesTurn();
saysShoot()
});
newGame.addEventListener('click',timeOut)




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
function hideCharacters() {
  hiddenHeroButton.classList.add('hidden')
  hiddenVillainButton.classList.add('hidden')
};

function computerPlayer(gameFightersArr) {
  var randomIndex = Math.floor(Math.random() * gameFightersArr.length)
  computerToken = gameFightersArr[randomIndex]

  return computerToken
};

function saysShoot() {
  game.winConditions(user.token, computer.token);
  updateUserScore()
  updateComputerScore()
};

function gameRef(winner) {
  winnerDisplay.classList.remove('hidden')
  if(winner === user.token ) {
    gameAnnouncer.innerText = `Winner: ${user.name}`
    winnerDisplay.innerText = `😄 ${user.token} destroyed ${computer.token}!😄`
  }else if(winner === computerToken) {
    gameAnnouncer.innerText = `Winner: ${computer.name}`
    winnerDisplay.innerText = `🤬 ${computer.token} disembowled ${user.token}!🤬`
  }else {
    gameAnnouncer.innerText = `Winner: NONE `
    winnerDisplay.innerText = `🩻 ${user.token} and ${computer.token} had equal damage! 🩻 `
  }
}

function updateUserScore() {
userWinsCounter.textContent = `${game.player1Wins}`
}

function updateComputerScore() {
computerWinsCounter.textContent = `${game.player2Wins}`;
}

function matchUsersChoice() {
  if(user.token === 'rock') {
    userFighterDisplay.innerText = '🗿'
  }else if (user.token === 'paper') {
    userFighterDisplay.innerText = '📄'
  }else if(user.token === 'scissors') {
    userFighterDisplay.innerText = '✂️'
  }else if (user.token === 'hero') {
    userFighterDisplay.innerText = '🦸🏽‍♂️'
  }else if (user.token === 'villain') {
      userFighterDisplay.innerText = '🦹🏼‍♂️'
  }else{
    userFighterDisplay.innerText = '🛑'

  }
}

function matchComputerChoice() {
  if(computer.token === 'rock') {
    computerFighterDisplay.innerText = '🗿'
  }else if (computer.token === 'paper') {
    computerFighterDisplay.innerText = '📄'
  }else if(computer.token === 'scissors') {
    computerFighterDisplay.innerText = '✂️'
  }else if (computer.token === 'hero') {
    computerFighterDisplay.innerText = '🦸🏽‍♂️'
  }else if (computer.token === 'villain') {
    computerFighterDisplay.innerText = '🦹🏼‍♂️'
  }else{
    computerFighterDisplay.innerText = '🛑'
  }
}

function backHome() {
  hiddenForm.classList.add('hidden');
  classicGameArea.classList.remove('hidden');
  injusticeGameArea.classList.remove('hidden');
  hideCharacters()
};

function timeOut() {
  game.player1Wins = 0;
  game.player2Wins = 0;
  userFighterDisplay.innerText = 'Fighter';
  computerFighterDisplay.innerText = 'Fighter';
};





//  variables
var classicGameFighters = ['paper','scissors','rock']
var superGameFighters =['paper','scissors','rock','villain','hero'];
var user = new Player({name:'user', token:'', wins:0});
var computer = new Player({name:'computer', token:'', wins:0});
var game = new Game(user, computer);
