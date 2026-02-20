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

//Machine ID > hide all sections > show section
function showOnly(id) {
  const addMoneySection = document.getElementById("add-money");
  const cashoutSection = document.getElementById("cashout");
  const historySection = document.getElementById("history");

  // Hide all sections
  addMoneySection.classList.add("hidden");
  cashoutSection.classList.add("hidden");
  historySection.classList.add("hidden");

  // Show the selected section
  const sectionToShow = document.getElementById(id);
  sectionToShow.classList.remove("hidden");
}
