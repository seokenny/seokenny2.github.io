
$(document).ready(function(){
	$(".work_pages").fadeIn();
	$(".burger_menu").on("click",function(){
		$("#nav_mobile").slideDown();
	});

	$(".close_mobile").on("click",function(){
		$("#nav_mobile").slideUp();
	});

	$(".nav_about").click(function(){
	    $('html, body').animate({ scrollTop: $('#hello_contain').offset().top - 0}, 'slow');
	    $("#nav_mobile").slideUp();
	});

	$(".nav_works").click(function(){
	    $('html, body').animate({ scrollTop: $('.wt_rugs').offset().top - 75}, 'slow');
	    $("#nav_mobile").slideUp();
	});

	$(".nav_contact").click(function(){
	    $('html, body').animate({ scrollTop: $('#contact_contain').offset().top - 75}, 'slow');
	    $("#nav_mobile").slideUp();
	});

	$(".back_top").on("click",function(){
	    $('html, body').animate({ scrollTop: $('#main_contain').offset().top - 0}, 'slow');
	});



});

$(window).scroll(function(){
      if($(window).scrollTop()>100){
         $(".work_tile_left").animate({
         	'left':'0px'
         }, 1300);
         $(".work_tile_right").animate({
         	'right':'0px'
         }, 1300);
      }
});
