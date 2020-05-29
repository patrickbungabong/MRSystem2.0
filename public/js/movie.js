$( document ).ready(function() {
	loadSwiper();
});

//loads external swiper.js
function loadSwiper(){
	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		loop: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,
		},
		pagination: {
			el: '.swiper-pagination',
		},
	});
}
