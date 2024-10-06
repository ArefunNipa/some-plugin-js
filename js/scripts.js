jQuery(document).ready(function () {

	'use strict';


	// -----------------------------------------
	// fixed-top
	// -----------------------------------------
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".sticky").removeClass("stick");
		} else {
			$(".sticky").addClass("stick");
		}
	});


	// -----------------------------------------
	// counter Home one
	// -----------------------------------------
	$(window).on('scroll', function () {
		$('.counter').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');

			$({ countNum: $this.text() }).animate({
				countNum: countTo
			},
				{
					duration: 2000,
					easing: 'linear',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						//alert('finished');
					}
				});
		});
	});

	// -----------------------------------------
	// slick-slider Home one
	// -----------------------------------------
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		infinite: true,
		asNavFor: '.slider-nav',
		focusOnSelect: true,
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		asNavFor: '.slider-for',
		focusOnSelect: true,
	});

	
	// -----------------------------------------
	 	//Scroll To Top
	// ----------------------------------------- 
    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').on('click',function(){
            $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });


	// -----------------------------------------
	// AOS Animation
	// -----------------------------------------
	AOS.init();
	$(window).on('load', function () {
		AOS.refreshHard();
	});

	
	// -----------------------------------------
	// slick-slider Home Two
	// -----------------------------------------
	$(".slider_service").slick({
        dots: true,
		arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
		centerMode: true,
		// autoplay: true,
		draggable: true,
		speed: 2500,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
    });


	$('.slider_home_two').slick({
		dots: true,
		arrows: true,
	  	infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
	  });


	  // -----------------------------------------
	  // counter Home Two
	  // -----------------------------------------
	  $(window).on('scroll', function () {
		$('.counter_two').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');

			$({ countNum: $this.text() }).animate({
				countNum: countTo
			},
				{
					duration: 2000,
					easing: 'linear',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						//alert('finished');
					}
				});
		});
	});

	
	// -----------------------------------------
	// slick-slider Home one
	// -----------------------------------------
	$('.slider-for-two').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.slider-nav-two',
		focusOnSelect: true,
	});
	$('.slider-nav-two').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical:true,
		verticalSwiping:true,
		dots: true,
		arrows: true,
		asNavFor: '.slider-for-two',
		focusOnSelect: true,
	});


	// -----------------------------------------
	// team button Home Two
	// -----------------------------------------
	$('.social').on('click', function(){

		$('.social').toggleClass('active');
	});
	// $('.social').on('click', function(){
	// 	$(this).removeClass('active');
	// });
	
}); // JQuery end