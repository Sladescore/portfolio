(function () {

	const elem = document.querySelector('.products__list');
	const iso = new Isotope( elem, {
	  itemSelector: '.products__item',
	});		


	const controlls = document.querySelectorAll(".filter__item");
	const activeClass = "filter__item--active";

	controlls.forEach(function(control){

		controlsLink = document.querySelector(".filter__link");

		control.addEventListener("click", function(e){
			e.preventDefault();

			const filterName = controlsLink.getAttribute("data-filter");

			controlls.forEach(function(link){
				link.classList.remove(activeClass);
			});

			control.classList.add(activeClass);

			iso.arrange({
				filter: '.${filterName}';
			});
		});

	});

}())