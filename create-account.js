function createAccount(pin, amount=0) {
  // edge cases: incorrect pin, withdrawal amount more than account amount, 
  return {
    checkBalance(userPin) {
      if(userPin !== pin) return `Invalid PIN.`;
      return `$${amount}`
    },

    deposit(userPin, newAmount) {
      if(userPin !== pin) return `Invalid PIN.`;
      amount += newAmount;
      return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`
    },

    withdraw(userPin, withdrawAmount) {
      if(userPin !== pin) return "Invalid PIN.";

      if(withdrawAmount > amount) return `Withdrawal amount exceeds account balance. Transaction cancelled.`
      amount -= withdrawAmount;
      return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`
    },

    changePin(userPin, newPin) {
      if(userPin !== pin) return "Invalid PIN.";
      pin = newPin;
      return "PIN successfully changed!"
    }
  }
 
}


module.exports = { createAccount };
