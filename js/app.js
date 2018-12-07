$(document).ready(function(){
	// $(".work_title").hide();
	// $(".work1").hover(function(){
	// 	$(".work1 .work_title").fadeToggle();
	// 	$(".work1 .work_descript").fadeToggle();
	// });
	// $(".work2").hover(function(){
	// 	$(".work2 .work_title").fadeToggle();
	// 	$(".work2 .work_descript").fadeToggle();
	// });
	// $(".work3").hover(function(){
	// 	$(".work3 .work_title").fadeToggle();
	// 	$(".work3 .work_descript").fadeToggle();
	// });
	// $(".work4").hover(function(){
	// 	$(".work4 .work_title").fadeToggle();
	// 	$(".work4 .work_descript").fadeToggle();
	// });

	$("#nav_bar_mobile").hide();
	$(".work_tile_slider").hide();
	$("#nav_tab").hide();
	$("#design_content").hide();

	$(".nav_home").click(function(){
    		$('html, body').animate({ scrollTop: $('#full_container').offset().top }, 'slow');       
	});
	$(".nav_about").click(function(){
            $('html, body').animate({ scrollTop: $('.about_class').offset().top}, 'slow');
	});
	$(".nav_skills").click(function(){
            $('html, body').animate({ scrollTop: $('.skills_class').offset().top}, 'slow');
	});
	$(".nav_projects").click(function(){
            $('html, body').animate({ scrollTop: $('.projects_class').offset().top}, 'slow');
	});
	$(".nav_work").click(function(){
            $('html, body').animate({ scrollTop: $('.work_class').offset().top}, 'slow');
	});
	$(".nav_contact").click(function(){
            $('html, body').animate({ scrollTop: $('.contact_class').offset().top}, 'slow');
	});
//Mobile
	$(".nav_home_mob").click(function(){
    		$('html, body').animate({ scrollTop: $('#full_container').offset().top }, 'slow');       
	});
	$(".nav_about_mob").click(function(){
            $('html, body').animate({ scrollTop: $('.about_class').offset().top - 130}, 'slow');
	});
	$(".nav_skills_mob").click(function(){
            $('html, body').animate({ scrollTop: $('.skills_class').offset().top - 130}, 'slow');
	});
	$(".nav_projects_mob").click(function(){
            $('html, body').animate({ scrollTop: $('.projects_class').offset().top - 130}, 'slow');
	});
	$(".nav_work_mob").click(function(){
            $('html, body').animate({ scrollTop: $('.work_class').offset().top - 130}, 'slow');
	});
	$(".nav_contact_mob").click(function(){
            $('html, body').animate({ scrollTop: $('.contact_class').offset().top - 130}, 'slow');
	});

	$("#burger_menu").on("click", function(){
		$("#nav_bar_mobile").slideDown();
	});
	$("#burger_menu_close").on("click", function(){
		$("#nav_bar_mobile").slideUp();
	});
	$("#burger.nav_item").on("click", function(){
		$("nav_bar_mobile").slideUp();
	});

	$(".work_tile.todo_list").on("click", function(){
		$(".todo_slider").slideToggle();
	});

	// $(".work_tile.guesser").on("click", function(){
	// 	$(".guess_slider").slideToggle();
	// });

	$(".work_tile.guesser").stop().hover(function(){
		$(".guess_slider").stop().fadeToggle();
	});

	// $(".work_tile.rugsusa").on("click", function(){
	// 	$(".rugsusa_slider").slideToggle();
	// });

	$(".work_tile.spring_poster").stop().hover(function(){
		$(".springposter_slider").stop().fadeToggle();
	});

	$(".work_tile.business_card").stop().hover(function(){
		$(".businesscard_slider").stop().fadeToggle();
	});

	$(".work_tile.city_circles").stop().hover(function(){
		$(".city_slider").stop().fadeToggle();
	});

	$(".work_tile.oneclub_poster").stop().hover(function(){
		$(".oneclub_slider").stop().fadeToggle();
	});

	$(".work_tile.self_promotion").stop().hover(function(){
		$(".self_slider").stop().fadeToggle();
	});

	$(".work_tile.sunnyside_branding").stop().hover(function(){
		$(".sunnyside_slider").stop().fadeToggle();
	});

	$(".work_tile.rugsusa").stop().hover(function(){
		$(".rugsusa_slider").stop().fadeToggle();
	});

	$(".work_tile.bonghwa").stop().hover(function(){
		$(".bonghwa_slider").stop().fadeToggle();
	});

	$("#nav_bar_mobile").on("click", function(){
		$("#nav_bar_mobile").slideUp();
	});

	$(".design_tab").on("click", function(){
		$(".project_tab").removeClass("tab_active");
		this.className+=" tab_active";
		$("#project_content").stop().slideUp(1000, function(){
			$("#design_content").slideDown(1000);
		});
	});
	$(".project_tab").on("click", function(){
		$(".design_tab").removeClass("tab_active");
		this.className+=" tab_active";
		$("#design_content").stop().slideUp(1000, function(){
			$("#project_content").slideDown(1000);
		});
	});
});