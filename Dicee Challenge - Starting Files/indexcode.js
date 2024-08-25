var diceImage = document.querySelector(".img1") 
diceImage.addEventListener("click", randomDice);
function randomDice () {
    var randomNumber1 = Math.floor(Math.random()*6)+1; 
    diceImage.src=`images/dice${randomNumber1}.png`
    return randomNumber1

}


var diceImage1 = document.querySelector(".img2") 
diceImage1.addEventListener("click", randomDice1);
function randomDice1 () {
    var randomNumber2=randomDice()
    var randomNumber3 = Math.floor(Math.random()*6)+1;
    diceImage1.src=`images/dice${randomNumber3}.png`
    updateHeader (randomNumber2,randomNumber3)
}


 
    function updateHeader (randomNumber2,randomNumber3) {
        
    var titleElement = document.querySelector(".container h1")
    if (randomNumber2>randomNumber3){titleElement.innerHTML= "Player 1 Wins !";}
    else if (randomNumber2<randomNumber3){titleElement.innerHTML= "Player 2 Wins !";}
    else  {titleElement.innerHTML= "Draw!";}}



