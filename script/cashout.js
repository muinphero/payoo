document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1. Get the agent number and validate
  const cashOutNumberInput = document.getElementById("cashout-number");
  const cashOutNumber = cashOutNumberInput.value;
  console.log(cashOutNumber);

  if (cashOutNumber.length != 11) {
    alert("Invalid agent number!");
    return;
  }

  // 2. Get the amount and validate and convert number
  const cashOutAmountInput = document.getElementById("cashout-amount");
  const cashOutAmount = cashOutAmountInput.value;
  console.log(cashOutAmount);

  // 3. Get the current balance, validate and convert to number
  const balanceElement = document.getElementById("balance");
  const currentBalance = balanceElement.innerText;
  console.log(currentBalance);

  // 4. Calculate new balance
  const newBalance = Number(currentBalance) - Number(cashOutAmount);

  if (newBalance < 0) {
    alert("Insufficient balance!");
    return;
  }

  // 5. Get the PIN and verify
  const cashOutPinInput = document.getElementById("cashout-pin");
  const cashOutPin = cashOutPinInput.value;

  if (cashOutPin == "1234") {
    //5-1. true:: show an alert > set balance
    alert("Cashout successful!");
    console.log("new balance", newBalance);
    balanceElement.innerText = newBalance;
  } else {
    //5-2. false:: show an error alert > return
    alert("Invalid PIN!");
    return;
  }
});
