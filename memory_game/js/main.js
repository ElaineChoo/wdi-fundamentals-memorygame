var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];

var checkForMatch = function (){
	document.getElementsByTagName('cardsInPlay')[0].setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}
	}
}

var flipCard = function () {
	var cardId = this.getAttribute('cards');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

var createBoard = function (){
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		document.getElementsByTagName('cardElement')[0].setAttribute("src", "images/back.png");
		var currentElement = document.getElementsByTagName('data-id')[0].setAttribute(i);

		document.getElementsByTagName('cardElement')[0].addEventListener('click', flipCard);
		document.getElementById('cardElement').appendChild('game-board');
	}
}

createBoard();