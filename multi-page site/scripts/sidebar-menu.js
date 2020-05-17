(function() {

	const openingBtn = document.querySelector(".sidebar__hamburger");
	const closingBtn = document.querySelector(".sidebar__close");
	const Sidebar = document.querySelector(".sidebar");


	openingBtn.addEventListener("click", function(){
		Sidebar.classList.add("sidebar--opened");
	});
	
	closingBtn.addEventListener("click", function(){
		Sidebar.classList.remove("sidebar--opened");
	});

})();