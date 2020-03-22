var username = document.getElementById("username");
var password = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var button = document.getElementById("button");
var usernameLabel = document.getElementById("usernameLabel");
var passwordLabel = document.getElementById("passwordLabel");
var passwordValid = false;
var lowerCaseValid = false;
var capitalValid = false;
var numberValid = false;
var usernameLengthValid = false;
var passwordLengthValid = false;
button.disabled = true;

username.onfocus = function() {
  document.getElementById("usernameConditions").style.display = "block";
};

username.onblur = function() {
  document.getElementById("usernameConditions").style.display = "none";
  toggleButton();
};

password.onfocus = function() {
  document.getElementById("passwordConditions").style.display = "block";
};

password.onblur = function() {
  document.getElementById("passwordConditions").style.display = "none";
  toggleButton();
};

username.onkeyup = function() {
  if (username.value.length >= 3) {
    usernameLength.classList.remove("invalid");
    usernameLength.classList.add("valid");
    usernameLabel.classList.remove("invalidLabel");
    usernameLabel.classList.add("validLabel");
    usernameLengthValid = true;
  } else {
    usernameLength.classList.remove("valid");
    usernameLength.classList.add("invalid");
    usernameLabel.classList.remove("validLabel");
    usernameLabel.classList.add("invalidLabel");
    usernameLengthValid = false;
  }
  toggleButton();
};

password.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    lowerCaseValid = true;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    lowerCaseValid = false;
  }

  var upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    capitalValid = true;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    capitalValid = false;
  }

  var numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    numberValid = true;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    numberValid = false;
  }

  if (password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    passwordLengthValid = true;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    passwordLengthValid = false;
  }

  passwordValid =
    lowerCaseLetters && capitalValid && numberValid && passwordLengthValid;

  if (passwordValid) {
    passwordLabel.classList.remove("invalidLabel");
    passwordLabel.classList.add("validLabel");
  } else {
    passwordLabel.classList.remove("validLabel");
    passwordLabel.classList.add("invalidLabel");
  }
  toggleButton();
};

var toggleButton = function() {
  if (usernameLengthValid && passwordValid) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};
