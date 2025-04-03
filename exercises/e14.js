// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let result = [];
  for (let obj of array) {
    if (obj.deposits && obj.withdrawals) {
      let depositSum = 0;
      for (let deposit of obj.deposits) {
        depositSum += deposit;
      }
      let withdrawalSum = 0;
      for (let withdrawal of obj.withdrawals) {
        withdrawalSum += withdrawal;
      }
      if (obj.balance != depositSum - withdrawalSum) {
        result.push(obj);
      }
    }
  }
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
