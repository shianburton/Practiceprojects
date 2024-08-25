
var diceImage1 = document.querySelector(".img1");
  diceImage1.addEventListener("click", rollDice)
function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var diceImage = document.querySelector(".img1");
    var imagePath = `images/dice${randomNumber}.png`;
    diceImage.src = imagePath
  
    updateHeader(); // Call updateHeader after each dice roll
    return randomNumber
  }
  var diceImage2 = document.querySelector(".img2");
  diceImage2.addEventListener("click", rollDice1);

  function rollDice1() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var diceImage1 = document.querySelector(".img2");
    var imagePath1 = `images/dice${randomNumber1}.png`;
    diceImage1.src = imagePath1

    updateHeader(); // Call updateHeader after each dice roll
    return randomNumber1
  }
  
  function updateHeader() {
    var diceRoll1 = rollDice ()
    var diceRoll2 = rollDice1 ()
  
    var titleElement = document.querySelector(".container h1");
    if (diceRoll1 > diceRoll2) {
      titleElement.textContent = "Player 1 Wins !";
    } else if (diceRoll1 < diceRoll2) {
      titleElement.textContent = "Player 2 Wins !";
    } else {
      titleElement.textContent = "Draw!";
    }
  }

  function randomNumber (){
    var randomNumber1 = Math.floor(Math.random()*6)+1; 
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    randomDice(randomNumber1)
    randomDice1(randomNumber2)
  }
  var diceImage = document.querySelector(".img1") 
diceImage.addEventListener("click", randomDice);
function randomDice (randomNumber1) {
    var diceRoll1 = randomNumber1
    var diceImage1 = document.querySelector(".img2") 
    var diceImage2 = document.querySelector(".img2") 
    diceImage1.src=`images/dice${diceRoll1}.png`
    updateHeader (randomNumber1,randomNumber2)}

    var diceImage = document.querySelector(".img2") 
diceImage.addEventListener("click", randomDice);
function randomDice1 () {
    
    var diceImage1 = document.querySelector(".img2") 
    var diceImage2 = document.querySelector(".img2") 
    diceImage1.src=`images/dice${randomNumber1}.png`
    diceImage2.src=`images/dice${randomNumber2}.png`
    updateHeader (randomNumber1,randomNumber2)}

    var diceImage = document.querySelector("img") 
diceImage.addEventListener("click", randomDice);
function randomDice () {
    var randomNumber1 = Math.floor(Math.random()*6)+1; 
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var diceImage1 = document.querySelector(".img1") 
    var diceImage2 = document.querySelector(".img2") 
    diceImage1.src=`images/dice${randomNumber1}.png`
    diceImage2.src=`images/dice${randomNumber2}.png`
    updateHeader (randomNumber1,randomNumber2)
}



 
    function updateHeader (randomNumber1,randomNumber2) {
        
    var titleElement = document.querySelector(".container h1")
    if (randomNumber1>randomNumber2){titleElement.innerHTML= "Player 1 Wins !";}
    else if (randomNumber1<randomNumber2){titleElement.innerHTML= "Player 2 Wins !";}
    else  {titleElement.innerHTML= "Draw!";}}