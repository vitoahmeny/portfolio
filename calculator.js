document.addEventListener('DOMContentLoaded', function () {
	var numbers = document.getElementsByClassName('number');
	var signs = document.getElementsByClassName('sign');
	var view = document.querySelector('.view');
	var dot = document.querySelector('.dot');
	var ac = document.querySelector('.ac');
	var percent = document.querySelector('.percent');
	var equal = document.querySelector('.equal');
	var del = document.querySelector('.del');
	var negative = document.getElementById('negative');
	var evaluate = document.querySelector('.evaluate');
	var form = document.getElementsByTagName('form')[0];

	var func = function (event) {
		event.preventDefault();
		view.innerHTML = view.innerHTML + this.textContent;
	};

	for (var i = 0; i < numbers.length; i++) {
		numbers[i].addEventListener('click', func);
	}

	for (var i = 0; i < signs.length; i++) {
		signs[i].addEventListener('click', func);
	}

	dot.addEventListener('click', function (event) {
		event.preventDefault();
		if (view.textContent.indexOf('.') == -1) {
			view.innerHTML = view.innerHTML + this.textContent;
		}
	});

	ac.addEventListener('click', function (event) {
		event.preventDefault();
		view.innerHTML = '';
	});

	del.addEventListener('click', function (event) {
		event.preventDefault();
		var current = view.innerHTML;
		var deleted = current.slice(0, current.length - 1);
		view.innerHTML = deleted;
	});

	evaluate.addEventListener('click', function (event) {
		event.preventDefault();
		var equation = view.innerHTML;
		view.innerHTML = eval(equation);
	});

	negative.addEventListener('click', function (event) {
		event.preventDefault();
		var num = view.innerHTML;
		if (num[0] === "-") {
			view.innerHTML = num.slice(1);
		}
		else {
			view.innerHTML = "-" + num;
		}
	});

	percent.addEventListener('click', function (event) {
		event.preventDefault();
		var number = view.innerHTML;
		view.innerHTML = Number(number) / 100;
	});

	//Change font-size according to word count
 	view.addEventListener();

document.addEventListener('keydown', function (event) {
	var key = event.which;
	var currentView = view.innerHTML;
		if (key > 47 && key < 58 && !event.shiftKey) {
			view.innerHTML = currentView + String.fromCharCode(key);
		}

		else if (key === 190 && !event.shiftKey) {
			view.innerHTML = view.innerHTML + '.';
		}

		else if (key === 191 && !event.shiftKey) {
			view.innerHTML = view.innerHTML + '/';
		}

		else if (key === 187 && event.shiftKey) {
			view.innerHTML = view.innerHTML + '+';
		}

		else if (key === 189 && !event.shiftKey) {
			view.innerHTML = view.innerHTML + '-';
		}

		else if (key === 56 && event.shiftKey) {
			view.innerHTML = view.innerHTML + '*';
		}

		else if (key === 13) {
			view.innerHTML = eval(view.innerHTML);
		}

		else if(key === 27) {
			view.innerHTML = "";
		}

		else if (key === 8) {
			var backup = currentView.slice(0, currentView.length - 1);
			view.innerHTML = backup;
		}


	});


});