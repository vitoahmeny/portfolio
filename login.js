document.addEventListener('DOMContentLoaded', function() {
	// body...
var logIn = document.getElementById('logIn');
var userName = document.querySelector('.text_input');
var loginPassWord = document.querySelector('.password_input');
var loginError = document.querySelector('#loginError');

userName.addEventListener('keyup', function (event) {
	loginError.innerHTML = "";
});

loginPassWord.addEventListener('keyup', function (event) {
	loginError.innerHTML = "";
});

logIn.addEventListener("submit", function (event) {
	event.preventDefault();
	if (validator.isEmpty(userName.value) || (validator.isEmpty(userName.value) && validator.isEmpty(loginPassWord.value))) {
    	loginError.innerHTML = "Username can't be empty.";
	}
	else if (validator.isEmpty(loginPassWord.value)) {
		loginError.innerHTML = "Password can't be empty.";
	}
});
});

