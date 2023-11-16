const form = document.getElementById("form");
const password1el = document.getElementById("password1");
const password2el = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validForm() {
  isValid = form.checkValidity();

  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    messageContainer.style.width = "90%";
    return;
  }

  if(password1el.value === password2el.value){
    passwordsMatch = true;
    password1el.style.borderColor = "green";
    password2el.style.borderColor = "green";
  }else{
    // isValid = false;
    passwordsMatch = false;
    password1el.style.borderColor = "red";
    password2el.style.borderColor = "red";
    message.textContent = "Unmtached passwords";
    message.style.color = 'red';
    messageContainer.style.borderColor = "red";
    messageContainer.style.width = "90%";
    return;
  }

  if(isValid && passwordsMatch){
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeData(){
    const user = {
        name: form.name.value,
        phone:  form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

}
function processFormData(e) {
  e.preventDefault();
  validForm();
  if(isValid && passwordsMatch){
    storeData();
  }
}

form.addEventListener("submit", processFormData);
