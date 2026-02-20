document.getElementById("add-money-btn").addEventListener("click", function () {
  //Get Bank Name
  const bankAccountName = getValueFromInput("add-money-bank");
  if (bankAccountName == "Select a bank") {
    alert("Please select a bank!");
    return;
  }

  //Get Bank Account Number
  const bankAccount = getValueFromInput("add-money-number");
  if (bankAccount.length != 11) {
    alert("Invalid bank account number!");
    return;
  }

  //   // 1. Get the amount and validate and convert number
  const addMoneyAmount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(addMoneyAmount);
  console.log(newBalance);

  // Verify PIN
  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    //5-1. true:: show an alert > set balance
    alert(
      `Add money successful from ${bankAccountName} at ${new Date().toLocaleTimeString()}`,
    );
    setBalance(newBalance);
    //Get History element
    const historyElement = document.getElementById("history-container");
    //Create new history item
    const newHistoryItem = document.createElement("div");
    //Inner HTML for new history item
    newHistoryItem.innerHTML = `
    <div
          class="transaction-card bg-base-100 p-4 rounded-lg shadow-md mb-4"
        >
      Add money successful from ${bankAccountName}, Account No. ${bankAccount} at ${new Date().toLocaleString()}
      </div>`;
    //Append new history item to history element
    historyElement.appendChild(newHistoryItem);
  } else {
    //5-2. false:: show an error alert > return
    alert("Invalid PIN!");
    return;
  }
});
