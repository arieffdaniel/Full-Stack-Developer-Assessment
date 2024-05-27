document
  .getElementById("checkPointsBtn")
  .addEventListener("click", function () {
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    if (phoneNumber === "+60173527250" || phoneNumber === "0173527250") {
      window.location.href = "page2.html";
    } else {
      alert("Please enter a valid phone number: +60173527250");
    }
  });
