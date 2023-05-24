function loginAccount() {
  let email = document.forms["loginForm"]["email"].value;
  let password = document.forms["loginForm"]["password"].value;

  var user = localStorage.getItem(email);
  var data = JSON.parse(user);

  if (user == null || password != data.password) {
    alert("Incorrect email or password");
    return false;
  } else if (email == data.email && password == data.password) {
    alert(`Welcome back ${data.firstName}!`);
    localStorage.setItem("signedInUser", user);
    return true;
  }
}
