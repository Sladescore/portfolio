(function () {
	
	const slides = document.querySelectorAll(".fade-slider__item");
	const visibleClass = "fade-slider__item--visible";
	let index = 0;

	setInterval(function(){

		slides[index].classList.remove(visibleClass);
		index++;


		if (index + 1 > slides.length) {
			index = 0;
		}

		slides[index].classList.add(visibleClass);
	}, 5000);

}())