const errMsg = document.querySelector(".err");
const emailInput = document.querySelector("#email");
const successCard = document.querySelector(".successCard");
const signUpCard = document.querySelector(".signUp");
const dismissBtn = document.querySelector(".dismiss");

function validateEmail(input) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    signUpCard.style.display = "None";
    successCard.style.display = "Block";
    errMsg.style.display = "None";
    document.querySelector(".enteredEmail").innerHTML = input.value;
    input.value = "Please enter a new email";
    return true;
  } else {
    errMsg.style.display = "Block";
    emailInput.style.backgroundColor = "rgb(255 98 87 / 16%)";
    emailInput.style.color = "hsl(4, 100%, 67%)";
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    return false;
  }
}
dismissBtn.addEventListener("click", () => {
  emailInput.style.backgroundColor = "hsl(231, 7%, 60%) !important";
  emailInput.style.color = "hsl(231, 7%, 60%) !important";
  emailInput.style.borderColor = "hsl(231, 7%, 60%) !important";
  signUpCard.style.display = "grid";
  successCard.style.display = "None";
});
