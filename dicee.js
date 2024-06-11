
var randNumber;


function rollDice () 
{
	randNumber = Math.floor(Math.random() * 6) + 1;
}

rollDice();

var diceNumber1 = randNumber;

var diceFile1 = "images/dice" + diceNumber1 + ".png";

var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src", diceFile1);

rollDice();

var diceNumber2 = randNumber;

var diceFile2 = "images/dice" + diceNumber2 + ".png";

var dice2 = document.querySelectorAll("img")[1];

dice2.setAttribute("src", diceFile2);

if(diceNumber1 > diceNumber2)
{
	document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (diceNumber1 == diceNumber2)
{
	document.querySelector("h1").innerHTML = "Tie!";
} else 
{
	document.querySelector("h1").innerHTML = "Player 2 Wins!";
}




