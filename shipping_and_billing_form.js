document.addEventListener('DOMContentLoaded', function() {
	var shippingBillingForm = document.getElementById('shippingBillingForm');
	var shippingBillinginputs = document.getElementsByClassName('shippingBillinginput');
	var saveContinue = document.getElementById('saveContinue');
	var shippingBillingError = document.getElementById('shippingBillingError');

	saveContinue.addEventListener('click', function (event) {
		event.preventDefault();
		for (var i = shippingBillinginputs.length - 1; i >= 0; i--) {
			if (validator.isEmpty(shippingBillinginputs[i].value) && (shippingBillinginputs[i].getAttribute('id') !== 'addressLine2')) {
				shippingBillingError.innerHTML = "* Requires valid " + shippingBillinginputs[i].getAttribute('name');
			}
		}
	});

	for (var i = shippingBillinginputs.length - 1; i >= 0; i--) {
		shippingBillinginputs[i].addEventListener('keyup', function (event) {
			if (shippingBillingError.innerHTML) {
				shippingBillingError.innerHTML = '';
			}
		});
	}

});