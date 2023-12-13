function createAccount(pin, amount) {
  // edge cases: incorrect pin, withdrawal amount more than account amount, 
  return {
    checkBalance(userPin) {
      if(userPin !== pin) return `Wrong pin entered!`;
      else return `$${amount}`
    },

    deposit(userPin, newAmount) {
      if(userPin !== pin) return `Wrong pin entered!`;
      amount =+ newAmount;
      return `${newAmount} is deposited successfully`
    },

    withdraw(userPin, withdrawAmount) {
      if(userPin !== pin) return "Invalid PIN! Try again!";
      amount -= withdrawAmount;
      return `${withdrawAmount} is withdrawn!`
    },

    changePin(userPin) {
      if(userPin !== pin) return "Invalid PIN! Try again!";
      pin = userPin;
      return "Your PIN is successfully changed!"
    }
  }
 
}


module.exports = { createAccount };
