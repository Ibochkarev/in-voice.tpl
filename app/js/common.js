$(function() {

	// Custom JS
	var containerEl = document.querySelector('#portfolio-grid');
    var mixer = mixitup(containerEl);	

});
$(function() {

	function resizeSwiper() {
	    $('.swiper-container').height($('.swiper-slide img').height())
	}
	$('.swiper-container').each(function(){
	   // Hero swiper  
	   var mySwiper = new Swiper ('.swiper-container', {
			direction: 'vertical',
			autoplay: 4500,
			autoplayDisableOnInteraction: false,
			loop: true,
			pagination: '.swiper-pagination',
			grabCursor: true,
			keyboardControl: true,
			speed: 1000,
			slidesPerView:1,
			onImagesReady: function (swiper) {
			   resizeSwiper();
			   swiper.onResize();
			}
	   });
	});
	$(window).resize(function(){
	    resizeSwiper()
	});

});