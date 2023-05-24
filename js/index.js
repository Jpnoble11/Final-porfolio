function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_r3cdxym";
  const templateID = "template_ooqcm3z";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message was sent successfully!");
    })
    .catch((err) => console.log(err));
}
