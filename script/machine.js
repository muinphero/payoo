// machine id -> input value

function getValueFromInput(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = inputElement.value;
  return inputValue;
}

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const currentBalance = balanceElement.innerText;
  return Number(currentBalance);
}

// Machine value -> set balance
function setBalance(newBalance) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = newBalance;
}
