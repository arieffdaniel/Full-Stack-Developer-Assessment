window.onload = function () {
  var userDataJSON = sessionStorage.getItem("userData");
  if (userDataJSON) {
    var userData = JSON.parse(userDataJSON);

    var name = userData.name;
    var birthday = userData.birthday;
    var email = userData.email;

    var summaryDiv = document.getElementById("summary");
    summaryDiv.innerHTML = `
            <p>Name: ${name}</p>
            <p>Birthday: ${birthday}</p>
            <p>Email: ${email}</p>
        `;
  } else {
    // Handle case where data is not found in sessionStorage
    console.log("No user data found.");
  }
};
