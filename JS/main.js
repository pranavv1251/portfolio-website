$(document).ready(function(){
	var h = $('header');
	var s = h.before(h.clone().addClass("sticky"));
	$(window).on("scroll",function(){
		var scrollft=$(window).scrollTop();
		$("body").toggleClass("scroll",(scrollft>350))
	});
	//Smooth scroll
	$('.menu li a[href^="#"]').on('click',function(e){
		e.preventDefault();
		var target=$(this.hash);
		if(target.length){
			$('html,body').stop().animate({
				scrollTop: target.offset().top -60
			}, 1000);
		}
	});


	//Masonry
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 120,
		gutter: 0, 
		fitWidth: true	
	});
	//Slick
	$('.slider').slick({
		centerMode:true,
		slidesToShow: 3,
		arrows: true,
		autoplay: true,
		focusOnSelect:true,
		lazyLoad: 'progressive',
		autoplaySpeed:1250, 
		prevArrow:'<button type="button" class="slick-prev"></button>',
		nextArrow:'<button type="button" class="slick-next"></button>',
		responsive:[{
			breakpoint: 990,
			settings:{
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 760,
			settings:{
				slidesToShow: 1,
			}
		}
		]
	});
	//Responsive menu
	var body=$('body');
	var menuTrigger=$('.js-menu-trigger');
	var mainOverlay=$('.js-main-overlay');
	menuTrigger.on('click',function(){
		body.addClass('menu-is-active');
	});
	mainOverlay.on('click',function(){
		body.removeClass('menu-is-active');
	});
 	$('.menu li a').on('click',function(){
		$('body').removeClass('menu-is-active');
	});
});