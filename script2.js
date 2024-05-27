document.getElementById("submitBtn").addEventListener("click", function () {
  var name = document.getElementById("name").value.trim();
  var birthday = document.getElementById("birthday").value.trim();
  var email = document.getElementById("email").value.trim();

  if (!name || !birthday || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  // Creating a userData object
  var userData = {
    name: name,
    birthday: birthday,
    email: email,
  };

  // Storing data in sessionStorage
  sessionStorage.setItem("userData", JSON.stringify(userData));

  window.location.href = "page3.html";
});
