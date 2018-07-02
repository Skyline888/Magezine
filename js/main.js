"use strict";

// change order sidebar item
function sidebarOrder() {
	
		var itemarea = document.getElementById('sidebar'),
			orderItems = document.querySelectorAll('.sidebar-item'),
			findlastitem = +orderItems.length-1,	
			lastItem = orderItems[findlastitem].parentNode.removeChild(orderItems[findlastitem]);  
		itemarea.insertBefore(lastItem, itemarea.childNodes[0]);
}
var slides = document.querySelectorAll('#main .main-slider-item'),	
	currentSlide = 0,
	slideInterval = setInterval(mainSlider, 5000);

// slide mian img
function mainSlider() {
	
	    slides[currentSlide].className = 'main-slider-item';
	    currentSlide = (currentSlide+1) % slides.length;
	    slides[currentSlide].className = 'main-slider-item showing';
	    
}

//call order function 
var sidebarchange = setInterval(sidebarOrder, 5000);

// Listen for click events
var buttonActive = document.querySelectorAll('.main-content__button');

for (var i = 0; i < buttonActive.length; i++) {
	buttonActive[i].addEventListener('click', function (event) {

		event.preventDefault();

		var wrapper = document.getElementById('wrapper');
		this.classList.toggle('active');
		wrapper.classList.toggle('show-sidebar');

		if (document.getElementById('wrapper').classList == 'show-sidebar') {
			clearInterval(slideInterval);
		} else {
			clearInterval(sidebarchange);
		}

	});
}






