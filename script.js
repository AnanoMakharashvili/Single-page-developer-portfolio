const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const submitButton = document.getElementById("submit");
const errorMessage = document.getElementById("error-message");
const userNameLine = document.getElementById("line");
const emailLine = document.getElementById("line-first");
console.log(emailLine);

let inputText = "";

userEmail.addEventListener("input", (event) => {
  inputText = event.target.value;
});

submitButton.addEventListener("click", () => {
  if (validateEmail(inputText)) {
    getEmailValidate.style.display = "block";
    mainContainer.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    emailLine.style.border = "1px solid  #FF6F5B";
  }
});

submitButton.addEventListener("click", () => {
  if (userName.value.trim() !== "") {
    userNameLine.style.borderBottom = "1px solid #4EE1A0";
  } else {
    userName.style.border = "1px solid red";
  }
});

const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
