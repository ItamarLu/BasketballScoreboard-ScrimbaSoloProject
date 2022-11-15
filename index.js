let scoreHome = 0
let scoreGuest = 0
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