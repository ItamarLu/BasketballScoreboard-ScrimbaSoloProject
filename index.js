let scoreHome = 0
let scoreGuest = 0
let period = 0
let foulsHome = 0
let foulsGuest = 0
periodNumber.textContent = period
foulsCountHome.textContent = foulsHome
foulsCountGuest.textContent = foulsGuest
homeScore.textContent = scoreHome
guestScore.textContent = scoreGuest

function plusOneHome() {
  scoreHome += 1
  homeScore.textContent = scoreHome 
}
function plusTwoHome() {
  scoreHome += 2
  homeScore.textContent = scoreHome 
}
function plusThreeHome() {
  scoreHome += 3
  homeScore.textContent = scoreHome 
}
function plusOneGuest() {
  scoreGuest += 1
  guestScore.textContent = scoreGuest 
}
function plusTwoGuest() {
  scoreGuest += 2
  guestScore.textContent = scoreGuest 
}
function plusThreeGuest() {
  scoreGuest += 3
  guestScore.textContent = scoreGuest 
}

function periBtn(){
  period += 1
  periodNumber.textContent = period
}

function foulsBtnH() {
  foulsHome += 1
  foulsCountHome.textContent = foulsHome
}
function foulsBtnG() {
  foulsGuest += 1
  foulsCountGuest.textContent = foulsGuest
}

function newGame() {
  scoreHome = 0
  scoreGuest = 0
  period = 0
  foulsHome = 0
  foulsGuest = 0
  periodNumber.textContent = period
  foulsCountHome.textContent = foulsHome
  foulsCountGuest.textContent = foulsGuest
  homeScore.textContent = scoreHome
  guestScore.textContent = scoreGuest
} 