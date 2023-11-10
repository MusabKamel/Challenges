const userEmail = document.querySelector("[name = email]");
const successEmail = document.getElementById("success");
const enterEmail = document.getElementById("content");
const Email = document.getElementById("span");
const eror = document.getElementById("p_eror");
const button = document.getElementById("button");

const validateEmail = (Email) => {
  return String(Email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  if (validateEmail(userEmail.value)) {
    successEmail.classList.add("ShowItem");
    enterEmail.classList.add("HideItem");
    Email.innerText = userEmail.value;
    Email.style.classList.add("Bold");
  } else {
    userEmail.classList.add("StyleInputEmail");
    eror.classList.add("ShowItem");
    console.log(userEmail);
  }
};

button.onclick = function (e) {
  e.preventDefault();

  successEmail.classList.add("HideItem");
  enterEmail.classList.add("Flex");

  userEmail.value = "";
  eror.classList.add("HideItem");
};
