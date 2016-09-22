document.addEventListener('DOMContentLoaded', function () {
	var rects = document.getElementsByClassName('skill-rect');
	var expertise = document.getElementsByClassName('expertise');

	function indexOfRect(ele) {
		for (var i = 0; i < rects.length; i++) {
			if(rects[i] == ele) {
				return i;
			}
		}
			return -1;
	}

	function rectHandlerEnter() {
		var k = indexOfRect(this);
		expertise[k].style.opacity = 1;
	}

	function rectHandlerLeave() {
		var j = indexOfRect(this);
		expertise[j].style.opacity = 0;
	}

	for (var i = 0; i < rects.length; i++) {
		rects[i].addEventListener('mouseenter', rectHandlerEnter);
		rects[i].addEventListener('mouseleave', rectHandlerLeave);
	}

});

