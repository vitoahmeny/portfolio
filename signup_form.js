document.addEventListener('DOMContentLoaded', function() {

	var singupForm = document.getElementsByClassName('signup_form')[0];
	var firstName = document.getElementById('firstName');
	var lastName = document.getElementById('lastName');
	var birthDate = document.getElementById('birthDate');
	var email = document.getElementById('email');
	var password = document.getElementById('password');
	var signupInputs = document.getElementsByClassName('singupInput');

	var signupError = document.getElementById('signup_error');
	var invalidFirstName = document.getElementById('invalidFirstName');
	var invalidLastName = document.getElementById('invalidLastName');
	var invalidDate = document.getElementById('invalidDate');
	var invalidEmail = document.getElementById('invalidEmail');
	var invalidPassword = document.getElementById('invalidPassword');

firstName.addEventListener('keyup', function (event) {
	if (validator.isLength(firstName.value, 1)) {
		invalidFirstName.innerHTML = 'At least two characters';
	}
	else 
		invalidFirstName.innerHTML = "";
	signupError.innerHTML = "";
});

lastName.addEventListener('keyup', function (event) {
	if (validator.isLength(lastName.value, 1)) {
		invalidLastName.innerHTML = 'At least two characters';
	}
	else 
		invalidLastName.innerHTML = "";
		signupError.innerHTML = "";

});

birthDate.addEventListener('keyup', function (event) {
	if (!validator.isDate(birthDate.value)) {
		invalidDate.innerHTML = 'Valid date required (1988-02-14)';
	}
	else
		invalidDate.innerHTML = "";
		signupError.innerHTML = "";
});

email.addEventListener('keyup', function (event) {
	if (!validator.isEmailAddress(email.value)) {
		invalidEmail.innerHTML = "Valid email required (jsmith@example.com)";
	}
	else {
		invalidEmail.innerHTML = "";
			signupError.innerHTML = "";
	}
});

password.addEventListener('keyup', function (event) {
	if (validator.isLength(password.value, 7)) {
		invalidPassword.innerHTML = "At least 8 characters";
	}
	else 
		invalidPassword.innerHTML = "";
		signupError.innerHTML = "";
});

singupForm.addEventListener("submit", function (event) {
		event.preventDefault();
		for (var i = signupInputs.length - 1; i >= 0;  i--) {
			if (validator.isEmpty(signupInputs[i].value)) {
				signupError.innerHTML = inputs[i].getAttribute('name') + " required";
			}
		}
});
});