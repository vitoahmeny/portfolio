document.addEventListener('DOMContentLoaded', function () {
	var frontendRects = document.getElementsByClassName('frontendRects');
	var frontendExpertise = document.getElementsByClassName('frontendExpertise');
	var projectsMenuLabel = document.getElementsByClassName('projectsMenuLabel');
	var mobileLabel = document.getElementsByClassName('mobileLabel');
	var carouselStart = document.getElementsByClassName('carousel-start');

	function indexOfRect(ele) {
		for (var i = 0; i < frontendRects.length; i++) {
			if(frontendRects[i] == ele) {
				return i;
			}
		}
			return -1;
	}

	function indexOfEle(ele, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == ele) {
				return i;
			}
		}

		return -1;

	}

	function rectHandlerEnter() {
		var k = indexOfRect(this);
		frontendExpertise[k].style.opacity = 1;
	}

	function rectHandlerLeave() {
		var j = indexOfRect(this);
		frontendExpertise[j].style.opacity = 0;
	}

	function toggleDisplay(array, k) {
		for (var i = 0; i < array.length; i++) {
			array[i].removeAttribute("checked")
			if (i === k) {
				array[i].setAttribute("checked", "")
			}
		}
	}

	function projectsMenuLabelHandler() {
		var q = indexOfEle(this, projectsMenuLabel);
		toggleDisplay(carouselStart, q)
		var element = mobileLabel[q];
		element.scrollIntoView();
	}

	for (var i = 0; i < frontendRects.length; i++) {
		frontendRects[i].addEventListener('mouseenter', rectHandlerEnter);
		frontendRects[i].addEventListener('mouseleave', rectHandlerLeave);
	}
	for (var i = 0; i < projectsMenuLabel.length; i++) {
		projectsMenuLabel[i].addEventListener('click', projectsMenuLabelHandler)
	}

});

