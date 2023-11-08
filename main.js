let userEmail = document.querySelector("[name = email]");

const validateEmail = (Email) => {
  return String(Email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

window.onload = function () {
  document.getElementById("success").style.display = "none";
};
document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  if (validateEmail(userEmail.value)) {
    document.getElementById("success").style.display = "block";
    document.getElementById("content").style.display = "none";

    document.getElementById("span").innerText = userEmail.value;
    document.getElementById("span").style.fontWeight = " bold";
  } else {
    document.getElementById("p_eror").style.display = "block";
  }
};

document.getElementById("button").onclick = function (e) {
  e.preventDefault();

  document.getElementById("success").style.display = "none";
  document.getElementById("content").style.display = "flex";

  document.querySelector("[name = email]").value = "";
  document.getElementById("p_eror").style.display = "none";

  // userEmail.value
};
