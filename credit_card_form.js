document.addEventListener('DOMContentLoaded', function() {
	var creditCardForm = document.getElementById('creditCard');
	var name = document.getElementById('cardholderName');
	var cardNumber = document.getElementById('cardNumber');
	var notEnoughNumbers = document.getElementById('notEnoughNumbers');
	var cvv_explained = document.getElementById('cvv_explained');
	var securityCode = document.getElementById('securityCode');
	var date = document.getElementById('expirationDate');
	var cvvImg = document.getElementById('cvvImg');
	var creditCardInputs = document.getElementsByClassName('credit-card-input');
	var error = document.getElementById('error');

	cardNumber.addEventListener('keyup', function (event) {
		if (!validator.isCreditCard(this.value)) {
			notEnoughNumbers.innerHTML = 'A 16 digits number';
			cardNumber.className = 'invalidInput';
		}
		else
		{
			notEnoughNumbers.innerHTML = "";
			cardNumber.className = 'valid';
		}
	});

	cvv_explained.addEventListener('mouseover', function (event) {
		cvvImg.style.display = 'inline';
	});

	cvv_explained.addEventListener('mouseleave', function (event) {
		cvvImg.style.display = 'none';
	});

	creditCardForm.addEventListener('submit', function (event) {
		event.preventDefault();
		for (var i = creditCardInputs.length - 1; i >= 0; i--) {
			if (validator.isEmpty(creditCardInputs[i].value)) {
				error.innerHTML = "Valid " + inputs[i].getAttribute('name') + " required";
			}
		}
	});
});