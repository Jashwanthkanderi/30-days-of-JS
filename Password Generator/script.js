// Get the password input box element by its ID
const passwordBox = document.getElementById("password");

// Define the length of the password
const length = 14;

// Define character sets for different types of characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+?><:{}[]=-|";

// Function to create a password
function createPassword() {
  let password = "";

  // Add one character from each character set to the password
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Create a combined character set
  const allChars = upperCase + lowerCase + number + symbol;

  // Continue adding random characters until the desired length is reached
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Set the generated password in the input box
  passwordBox.value = password;
}

// Event listener to copy the generated password to the clipboard
const copy = document.querySelector("img");
copy.addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
  
  // Alert the user that the password has been copied
  alert("Password copied to clipboard");
});

/* The other recommended way of generating a password is as follows:
function generatePassword() {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+?><:{}[]";
  const length = 14;
  let password = "";
  while (password.length < length) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
}
*/
