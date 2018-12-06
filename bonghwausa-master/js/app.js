$("body").hide();

$(document).ready(function(){
	$("body").fadeIn(1000);

	$(".nav_home").click(function(){
            $('html, body').stop().animate({ scrollTop: $('.scroll_home').offset().top}, 'slow');
	});
	$(".nav_about").click(function(){
            $('html, body').stop().animate({ scrollTop: $('.scroll_about').offset().top - $('.navigation ul').height()}, 'slow');
	});
	$(".nav_catalog").click(function(){
            $('html, body').stop().animate({ scrollTop: $('.scroll_cat').offset().top - $('.navigation ul').height()}, 'slow');
	});
	$(".nav_contact").click(function(){
            $('html, body').stop().animate({ scrollTop: $('.scroll_contact').offset().top}, 'slow');
	});
	$('#moving_nav').hide();
	$('.black_shadow').hide();

	$('.nav_catalog').mouseover(function(){
		$('.nav_catalog').css({
			"border-bottom-width":'5px',
			"border-color":'#333'
		}, 500);
	});

	$('.cat_view_button.winter').mouseover(function(){
		$('.black_shadow.winter').stop().fadeIn();
	});
	$('.cat_view_button.winter').mouseout(function(){
		$('.black_shadow.winter').stop().fadeOut();
	});

	$('.cat_view_button.spring').mouseover(function(){
		$('.black_shadow.spring').stop().fadeIn();
	});
	$('.cat_view_button.spring').mouseout(function(){
		$('.black_shadow.spring').stop().fadeOut();
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll>0){
			$('#top_nav').fadeOut(600);
			$('#moving_nav').fadeIn(600);
		}
		else {
			$('#top_nav').fadeIn(600);
			$('#moving_nav').fadeOut(600);
		}
	});

	$(".winter_button").on('click',function(){
		$("body").fadeOut();
	})
	$(".spring_button").on('click',function(){
		$("body").fadeOut();
	})
});