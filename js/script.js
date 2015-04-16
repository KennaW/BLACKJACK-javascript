var Hand = {
  player: 0,
  score: 0,
  cards: []
}

var PlayingCard = {
  face: "",
  point: 0,
  suit: ""
}

var suit = [
  "H", "C", "S", "D"
]

$(document).ready(function() {

  var cardValue = Math.floor((Math.random() * 13) + 1);
  var cardSuit = suit[Math.floor(Math.random()*suit.length)];
  debugger;


});
