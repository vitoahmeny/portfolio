document.addEventListener('DOMContentLoaded', function() {
	var form = document.getElementsByClassName('color-building-form')[0];
	var red = document.getElementById('red');
	var green = document.getElementById('green');
	var blue = document.getElementById('blue');
	var alpha = document.getElementById('alpha');
	var colorBoard = document.getElementById('colorBoard');
	var arr = [red.value, green.value, blue.value, alpha.value];
	var code = document.getElementById('colorCode');

	red.addEventListener('change', function (event) {
	
		arr[0] = this.value;
		colorBoard.style.backgroundColor = "rgba(" + arr + ")";
		colorCode.innerHTML = "rgba(" + arr + ")";
	});

	green.addEventListener('change', function (event) {
		arr[1] = this.value;
		colorBoard.style.backgroundColor = "rgba(" + arr + ")";
		colorCode.innerHTML = "rgba(" + arr + ")";

	});

	blue.addEventListener('change', function (event) {
		arr[2] = this.value;
		colorBoard.style.backgroundColor = "rgba(" + arr + ")";
		colorCode.innerHTML = "rgba(" + arr + ")";


	});

	alpha.addEventListener('change', function (event) {
		arr[3] = this.value;
		colorBoard.style.backgroundColor = "rgba(" + arr + ")";
		colorCode.innerHTML = "rgba(" + arr + ")";

	});



});
