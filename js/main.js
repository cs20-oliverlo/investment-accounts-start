// Investment Accounts Start Code

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let maxDataVal = 5000; // max data value

// *****************************************************
// INITIALIZE ACCOUNTS ARRAY
// *****************************************************
let accounts = [];
for (let i = 0; i < 50; i++) {
  accounts.push(randomInt(0, 5001));
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function deposit() {
  // Prompt the user for the index of an account and the amount to deposit into that account.
  let accountNum = +prompt("Which account would you like to deposit into? (1-50)");
  let accountArrayNum = accountNum - 1
  let depositAmount = +prompt("How much money would you like to deposit?");

  // Modify the accounts array to reflect the deposit.
  accounts[accountArrayNum] += depositAmount;

  // Adjust the maxDataVal variable if necessary.
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] > maxDataVal) {
      maxDataVal = accounts[i];
    }
  }

  // Use the outputEl to provide a confirmation message.
  outputEl.innerHTML = `Deposited $${depositAmount} into account ${accountNum}. New balance: $${accounts[accountArrayNum]}.`;
}

function withdrawal() {
  // Prompt the user for the index of an account and the amount to withdraw from that account.
  let accountNum = +prompt("Which account would you like to withdrawal from? (1-50)");
  let accountArrayNum = accountNum - 1
  let withdrawalAmount = +prompt("How much money would you like to withdraw?");

  // Check to assure that the account has enough funds.
  // AND modify account to reflect withdrawal.
  if (withdrawalAmount <= 0) {
    alert("Invalid Entry: Withdrawing $0 or less! Account unchanged.")
    withdrawalAmount = 0;
  } else if (withdrawalAmount <= accounts[accountArrayNum]) {
    accounts[accountArrayNum] -= withdrawalAmount;
  } else {
    alert("Invalid Entry: Withdrawing more than account! Withdrawing max amount.")
    withdrawalAmount = accounts[accountArrayNum];
    accounts[accountArrayNum] -= withdrawalAmount;
  }

  // Use the outputEl to provide a confirmation message.

  outputEl.innerHTML = `Withdrew $${withdrawalAmount} from account ${accountNum}. New balance: $${accounts[accountArrayNum]}.`;
}

function countUnder2000() {
  //Number of accounts under 2000 
  let under2000 = 0;

  // Count the number of accounts that are less than 2000
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      under2000++;
    }
  }

  // Use the outputEl to display the results of the count.
  outputEl.innerHTML = `Count Under $2000: ${under2000}.`;
}

function generousDonor() {
  // Number of accounts under $2000, Total Amount donated
  let under2000 = 0;
  let total = 0;

  // Count number of accounts less than $2000 and add $500
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      accounts[i] += 500;
      total += 500;
      under2000++;
    }
  }

  // Use the outputEl to display the total amount of money that was donated.
  outputEl.innerHTML = `A Generous Donor has donated a total of $${total} across the ${under2000} account(s) that had less than $2000.`;
}

function hackerAttack() {
  // Total Amount Stolen
  let totalStolen = 0;

  for (let i = 0; i < accounts[i]; i++) {
    totalStolen += accounts[i] * 0.05;
    accounts[i] -= accounts[i] * 0.05;
  }

  // Use the outputEl to display the total amount that was stolen.
  outputEl.innerHTML = `A Hacker has stolen 5% from each account individually, a total of $${totalStolen}.`;
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// Display Data
drawArray(accounts, maxDataVal);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "deposit") {
    deposit();
  } else if (selection === "withdrawal") {
    withdrawal();
  } else if (selection === "count") {
    countUnder2000();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "attack") {
    hackerAttack();
  }

  // Redraw array to show any changes
  drawArray(accounts, maxDataVal);
}

// DRAW ARRAY FUNCTION
// Function to draw current state of grades array
function drawArray(array, maxVal) {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < array.length; i++) {
    divHeight = (array[i] / maxVal) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}
