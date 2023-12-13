function guessingGame(){
  let attempts = 0;
  let isOver = false;
  const random = Math.floor(Math.random() * 99);
 
  function guessCounter(num) {
    if(isOver) return "You won! Good job😁";

    attempts++;

    if(num === random) {
      isOver = true;
    }else if(num < random) {
      return `Too low!`
    }else{
      return `Too high!`
    }
  }

  return guessCounter;
}

let test = guessingGame();


module.exports = { guessingGame };
