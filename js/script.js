var Hand =  {
  init: function() {
    this.score = 0;
    this.cards = [];
  }
};

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
};

var suit = [
  "&hearts;", "&clubs;", "&spades;", "&diams;"
];


$(document).ready(function() {

  $("#new-game").click(function() {
    var human = Object.create(Hand);
    human.init();
    var computer = Object.create(Hand);
    computer.init();


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
        var cardC = Object.create(PlayingCard);
        var newNumC = Math.floor((Math.random() * 13) + 1);
        console.log("newNumC = " + newNumC);
        var newSuitC = suit[Math.floor(Math.random()*4)];
        cardC.suit = newSuitC;
        cardC.num = newNumC;
        console.log("cardC.num = " + cardC.num);
        computer.cards.push(cardC);
        console.log("compy face" + computer.cards[i - 1].face());
        $("#c" + i).html(computer.cards[i - 1].face() + newSuitC).addClass((newSuitC === "&hearts;" || newSuitC === "&diams;") ? "red" : "");
      };

    }();

  });








});
