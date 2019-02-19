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
    $('html, body').animate({ scrollTop: $('.wt_rugs').offset().top - 20}, 'slow');
    $("#nav_mobile").slideUp();
});

$(".nav_contact").click(function(){
    $('html, body').animate({ scrollTop: $('#contact_contain').offset().top - 0}, 'slow');
    $("#nav_mobile").slideUp();
});

$(".back_top").on("click",function(){
    $('html, body').animate({ scrollTop: $('#main_contain').offset().top - 0}, 'slow');
});