// Get the input fields
var nameInput = document.querySelector('#fName');
var lastname = document.querySelector('#fLastN');
var email = document.querySelector('#fEmail');
var password = document.querySelector('#fPassword');
var phone = document.querySelector('#fPhone');
var address = document.querySelector('#fAddress')

var form = document.querySelector('#form');
var inputs = document.querySelectorAll('#form input'); // crea un arraylist de todos los inputs dentro de form

// Get the error elements
var errorPassword = document.getElementById('errorPassword');
var errorPhone = document.getElementById('errorPhone');
var errorName = document.getElementById('errorName');
var errorLastname = document.getElementById('errorLastN');
var errorEmail = document.getElementById('errorEmail');
var errorAddress = document.getElementById('errorAddress');

// Exercise 6

/* --- Expresiones ---*/
const regExName = /^[a-zA-ZÀ-ÿ\s]{3,40}$/; // Letras y espacios, puede llevar acentos.
const regExLastname = /^[a-zA-ZÀ-ÿ\s]{3,40}$/; // Letras y espacios, puede llevar acentos.
const regExPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/; // de 8 a 40 dígitos, mínimo una letra o número.
const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regExPhone = /^\d{9}$/ // de 9 números.

var nameIsInvalid = true;
var emailIsInvalid = true;
var lastNameIsInvalid = true;
var passwordIsInvalid = true;
var phoneIsInvalid = true;
var addressIsInvalid = true;

form.addEventListener("submit", (event) => {
	event.preventDefault();
	validate();
	if (nameIsInvalid || emailIsInvalid || lastNameIsInvalid || passwordIsInvalid || phoneIsInvalid || addressIsInvalid) {
		return;	
	} 
});

function validate() {
	// Validate fields entered by the user: name, phone, password, and email

	if (!regExName.test(nameInput.value) || !nameInput.value.trim()) {
		nameInput.classList.add("is-invalid");
		nameIsInvalid = true;
	} else {
		nameInput.classList.remove("is-invalid");
		errorName.classList.add("d-none");
		nameInput.classList.add("is-valid");
		nameIsInvalid = false;
	}

	if (!regExEmail.test(email.value) || !email.value.trim()) {
		email.classList.add("is-invalid");
		emailIsInvalid = true;
	} else {
		email.classList.remove("is-invalid");
		errorEmail.classList.add("d-none");
		email.classList.add("is-valid");
		emailIsInvalid = false;
	}

	if (!regExLastname.test(lastname.value) || !lastname.value.trim()) {
		lastname.classList.add("is-invalid");
		lastNameIsInvalid = true;
	} else {
		lastname.classList.remove("is-invalid");
		errorLastname.classList.add("d-none");
		lastname.classList.add("is-valid");
		lastNameIsInvalid = false;
	}

	if (!regExPassword.test(password.value) || !password.value.trim()) {
		password.classList.add("is-invalid");
		passwordIsInvalid = true;
	} else {
		password.classList.remove("is-invalid");
		errorPassword.classList.add("d-none");
		password.classList.add("is-valid");
		passwordIsInvalid = false;
	}

	if (!regExPhone.test(phone.value) || !phone.value.trim()) {
		phone.classList.add("is-invalid");
		phoneIsInvalid = true;
	} else {
		phone.classList.remove("is-invalid");
		errorPhone.classList.add("d-none");
		phone.classList.add("is-valid");
		phoneIsInvalid = false;
	}

	if (!address.value.trim()) {
		address.classList.add("is-invalid");
		addressIsInvalid = true;
	} else {
		address.classList.remove("is-invalid");
		errorAddress.classList.add("d-none");
		address.classList.add("is-valid");
		addressIsInvalid = false;
	}

}
