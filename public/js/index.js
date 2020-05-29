$( document ).ready(function() {
	loadSwiper();
});

function loadSwiper() {
	var swiperContainer = $(".swiper-wrapper");
	var comingMovies = [1,2,3,4,5,6,7,8,9,10];

	comingMovies.forEach( function(movie){
		console.log("haha");
		swiperContainer.append(createSlide(movie));
	});
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

function createSlide(movie) {
	return "<div class='swiper-slide'><img src='img/coming/" + movie + ".jpg'></div>";
}
