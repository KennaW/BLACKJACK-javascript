// var Hand =  {
//   score: 0,
//   cards: []
// }

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
      return this.num;
    }
  }
}

var suit = [
  "&hearts;", "&clubs;", "&spades;", "&diams;"
];


$(document).ready(function() {

  $("#new-game").click(function() {
    var human = {score: 0, cards: []};
    var computer = {score: 0, cards: []};


    $("#new-game").hide();
    $("#hit").show();
    $("#stand").show();

    var humanDeal = function() {
      for (var i = 1; i <= 2; i++) {
        var card = Object.create(PlayingCard);
        var newNum = Math.floor((Math.random() * 13) + 1);
        console.log(newNum);
        var newSuit = suit[Math.floor(Math.random()*4)];
        card.suit = newSuit;
        card.num = newNum;
        console.log("cardnum = " + card.num);
        human.cards.push(card);
        $("#h" + i).html(human.cards[i - 1].face() + newSuit).addClass((newSuit === "&hearts;" || newSuit === "&diams;") ? "red" : "");
      };

    }();

    var computerDeal = function() {
      for (var i = 1; i <= 2; i++) {
        var card = Object.create(PlayingCard);
        var newNum = Math.floor((Math.random() * 13) + 1);
        console.log(newNum);
        var newSuit = suit[Math.floor(Math.random()*4)];
        card.suit = newSuit;
        card.num = newNum;
        console.log("cardnum = " + card.num);
        computer.cards.push(card);
        console.log(computer.cards[i - 1].face());
        $("#c" + i).html(computer.cards[i - 1].face() + newSuit).addClass((newSuit === "&hearts;" || newSuit === "&diams;") ? "red" : "");
      };

    }();

    // var card = Object.create(PlayingCard);
    // var newNum = Math.floor((Math.random() * 13) + 1);
    // var newSuit = suit[Math.floor(Math.random()*4)];
    // card.suit = newSuit;
    // card.num = newNum;
    // human.cards.push(card);
    // $("#h1").html(human.cards[0].face() + newSuit);

    // debugger;

  });








});
