document.addEventListener('DOMContentLoaded', function() {
	var schedulingForm = document.getElementsByClassName('scheduling-Form')[0];
	var scheduleDate = document.getElementById('scheduling-date');
	var scheduleHour = document.getElementById('scheduling-hour');
	var schedulePhone = document.getElementById('scheduling-phone');
	var scheduleEmail = document.getElementById('scheduling-email');
	var scheduleErrorMessage = document.getElementById('scheduling-errorMessage');
	var scheduleDateCheck = document.getElementById('scheduling-dateCheck');
	var scheduleInputs = document.getElementsByClassName('scheduleInput');

	scheduleDate.addEventListener('focusout', function (event) {
		if (!validator.isEmpty(this.value)){

		if (!validator.isDate(scheduleDate.value)) {
			scheduleDate.className = 'invalidInput';
			scheduleErrorMessage.innerHTML = 'Valid date required';
		}
		else 
		{
			scheduleDate.className = '';
			scheduleErrorMessage.innerHTML = '';
			scheduleDateCheck.innerHTML = '&#10004;';
		}}
	});

	scheduleHour.addEventListener('focusout', function (event) {
		if (validator.isHour(this.value) && !(validator.isEmpty(this.value))) {
			this.value = validator.completeHour(scheduleHour.value);
		}

		else if (validator.isEmpty(this.value)) {
			this.innerHTML = '';
			this.className = '';
		}

		else

		{
			this.className = 'invalidInput';
			scheduleErrorMessage.innerHTML = 'Valid hour required';
		}
	});

	schedulePhone.addEventListener('focusout', function (event) {
		if (!validator.isEmpty(this.value))
		{
			if (!validator.isPhoneNumber(this.value)) {
					this.className = 'invalidInput';
					scheduleErrorMessage.innerHTML = 'Valid phone number required';
				}}
	});

	schedulePhone.addEventListener('keyup', function (event) {
		if (this.className == 'invalidInput') {
			this.className = '';
			scheduleErrorMessage.innerHTML = '';
		}
	});

	scheduleEmail.addEventListener('focusout', function () {
		if (!validator.isEmailAddress(this.value)) {
			this.className = 'invalidInput';
			scheduleErrorMessage.innerHTML = 'Valid email required';
		}
	});

	schedulingForm.addEventListener('submit', function (event) {
		for (var i = scheduleInputs.length - 1; i >= 0; i--) {
			if (validator.isEmpty(scheduleInputs[i].value)) {
				scheduleErrorMessage.innerHTML = 'Valid ' + scheduleInputs[i].getAttribute('id') + ' required';
			}
		}
	});
});