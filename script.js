const toggleBtn = document.getElementById("toggle-button");
const navbar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
});


const email = document.querySelector("input[type=text]");
const errorEmail = document.querySelector("#error-email");
const textarea = document.querySelector("#textarea");
const errorRequest = document.querySelector("#error-request");
const errorMessage = document.querySelector("#error-message");

const sendBtn = document.querySelector("#send-button");

const validateEmail = (email) => {
  var regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    email.style.border = "red solid 1px";
    errorEmail.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Invalid email format.`;
    errorMessage.innerHTML = `email`;
  } else {
    email.style.border = "transparent solid 1px";
    errorEmail.innerHTML = ``;
  }

  if (textarea.value == "") {
    textarea.style.border = "red solid 1px";
    errorRequest.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Textfield is empty.`;
    errorMessage.innerHTML = `text`;
  } else {
    textarea.style.border = "transparent solid 1px";
    errorRequest.innerHTML = ``;
  }

  if (!validateEmail(email.value) && textarea.value == "") {
    errorMessage.innerHTML = `<i class="fa-solid fa-xmark"></i> Couldnt send your request `;
  } else if (validateEmail(email.value) && textarea.value !== "") {
    errorMessage.innerHTML = ` <i class="fa-solid fa-check"></i> Your email has been sent`;
    email.value = "";
    textarea.value = "";
  }
});

window.addEventListener("beforeunload", (e) => {
  if (email.value !== "" || textarea.value !== "") {
    e.preventDefault();
    e.returnValue = "";
  }
});


function openModal() {
  document.getElementById('modal').style.display = 'flex'
  document.getElementById('video').muted = false
}

function closeModal() {
  document.getElementById('modal').style.display = 'none'
  document.getElementById('video').muted = true
}