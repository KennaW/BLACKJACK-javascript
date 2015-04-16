var Hand = {
  score: 0,
  cards: []
}

var PlayingCard = {
  num: 0,
  point: 0,
  suit: "",
  face: function() {
    if (this.num === 11) {
      return "J";
    } else if (this.num === 12) {
      return "Q";
    } else if (this.num === 13) {
      return "K";
    } else if (this.num === 1) {
      return "A";
    } else {
      return "'" + this.num + "'";
    }
  }
}

var suit = [
  "H", "C", "S", "D"
];


$(document).ready(function() {

  $("#new-game").click(function() {
    var human = Object.create(Hand);
    var computer = Object.create(Hand);


    $("#new-game").hide();
    $("#hit").show();
    $("#stand").show();

    var card = Object.create(PlayingCard);
    var newNum = Math.floor((Math.random() * 13) + 1);
    var newSuit = suit[Math.floor(Math.random()*4)];
    card.suit = newSuit;
    card.num = newNum;
    human.cards.push(card);

    debugger;

  });








});
