// validate password

let validatePassword = function (password) {
  let errors = []; // to store error messages
  if (password.length < 8) {
    errors.push("At least 8 characters");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("contains uppercase letters."); // .test is used to match a pattern in a string.
  }
  if (!/[a-z]/.test(password)) {
    errors.push("contains lowercase letters.");
  }
  if (!/[1-9]/.test(password)) {
    errors.push("contains numbers.");
  }
  if (!/[!@#$%^&*():"<>?{}.,]/.test(password)) {
    errors.push("contains special characters");
  }

  if (errors.length === 0) {
    return "Password is strong";
  } else {
    return "Password is weak. Missing: " + errors.join(" "); //the join function used to communicate which criteria the password failed to meet
  }
};
let validationResult = validatePassword("Pass123@");
console.log(validationResult); // Password is strong
