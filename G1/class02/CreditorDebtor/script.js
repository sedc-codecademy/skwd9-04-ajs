let creditorMoney = 3000
let debtorMoney = 200

let isPaymentSuccessful = false;

console.log(`Creditor money - ${creditorMoney}`);
console.log(`Debtor money - ${debtorMoney}`);
console.log("=========")

do {
    let transferAmount = parseInt(prompt("Entre the amount of money:"))

    // if (transferAmount > 0 && transferAmount <= creditorMoney) {
    //     isPaymentSuccessful = true
    // } else {
    //     isPaymentSuccessful = false
    // }

    isPaymentSuccessful = 
        transferAmount > 0 && transferAmount <= creditorMoney ? true : false;

    if (isPaymentSuccessful) {
        creditorMoney -= transferAmount
        debtorMoney += transferAmount
        console.warn("payment complete")
    } else {
        console.warn("payment has failed!")
    }

    console.log(`Creditor money - ${creditorMoney}`);
    console.log(`Debtor money - ${debtorMoney}`);
    console.log("=========")

    if(creditorMoney > 0) {
        shouldProgramContunie = confirm("Do you want another transaction?")
    } else {
        console.warn("Sorry, you dont have enough money for the transaction!")
        shouldProgramContunie = false
    }

} while (shouldProgramContunie);