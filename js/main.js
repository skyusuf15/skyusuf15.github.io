'use strict';

$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");
});



(function($){

	/*------------------
  		HEADER
  	--------------------*/
	let navMenu = $('.menu-list');
		navMenu.onePageNav();
	$(window).on('scroll resize',function(e) {
		if ($(this).scrollTop() > 70) {
			$('.header-section').addClass('sticky');
		}else{
			$('.header-section').removeClass('sticky');
		}
		e.preventDefault();
	});

	$('.responsive').on('click', function(event) {
		$('.menu-list').slideToggle(400);
		$('.header-section').toggleClass('bgc');
		event.preventDefault();
	});

	$('.menu-list li a').on('click', function(event) {
		if ($(window).width() < 768) {
			$('.menu-list').slideUp(400);
			$('.header-section').removeClass('bgc');
		}
	});

	/*------------------
		TYPED JS
	--------------------*/
	$(".element").typed({
		strings: ["I'm Yusuf Korede, Sanusi.", "a Software Engineer/Backend Engineer,", "Based in Ogun State, Nigeria."],
		typeSpeed: 10,
		loop:true,
		backDelay: 2000
	});

})(jQuery);