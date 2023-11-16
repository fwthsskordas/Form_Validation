const form = document.getElementById('form');
const password1el = document.getElementById('password1');
const password2el = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
let isValid = false;

function validForm(){
isValid=form.checkValidity();
console.log(isValid);
message.textContent = "Please fill out all fields";
message.style.color = 'red';
messageContainer.style.borderColor = 'red'; 
messageContainer.style.width = '90%'; 
messageContainer.style.fontWeight = 'regular'; 
}

function processFormData(e){
e.preventDefault();
validForm();
}

form.addEventListener('submit', processFormData);