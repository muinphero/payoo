document.getElementById("login-btn").addEventListener("click", function () {
  // Get the mobile number
  const numberInput = document.getElementById("input-number");
  const mobileNumber = numberInput.value.trim();
  console.log(mobileNumber);
  // Get the PIN
  const pinInput = document.getElementById("input-pin");
  const pin = pinInput.value.trim();
  console.log(pin);
  // Validate the inputs
  if (mobileNumber == "01234567890" && pin == "1234") {
    // True::alert > Home Page
    // alert("Login successful! Redirecting to home page...");
    window.location.assign("home.html"); // Redirect to home page
    // False::alert > Invalid credentials
  } else {
    alert("Invalid mobile number or PIN!");
    return;
  }
});
