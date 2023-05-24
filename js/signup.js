function createAccount() {
  var firstName = document.forms["signupForm"]["first-name"].value;
  var lastName = document.forms["signupForm"]["last-name"].value;
  var email = document.forms["signupForm"]["email"].value;
  var password = document.forms["signupForm"]["password"].value;
  var confirmPassword = document.forms["signupForm"]["confirm-password"].value;

  var data = localStorage.getItem(email);

  if (data != null) {
    window.alert("Email already registered.");
    return false;
  } else if (password != confirmPassword) {
    window.alert("Password entered does not match. Please re-enter.");
    return false;
  } else {
    var newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    window.alert(
      "Account successfully created.\nYou can now login your new account."
    );
    var json = JSON.stringify(newUser);
    localStorage.setItem(email, json);
    return true;
  }
}
