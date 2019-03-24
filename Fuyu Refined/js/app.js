$(document).ready(function(){

	$(".photo_gallery").addClass("active");
	$("#tablet_contain").addClass("active");
    
	$(".nav_home").on("click",function(){
		if($(".fuyu_store").hasClass("active")){
			$(".fuyu_store").stop().fadeOut("fast",function(){
				$(".photo_gallery").fadeIn("fast");
				$("#tablet_contain").fadeIn("fast");
			});
			$(".fuyu_store").removeClass("active");
			$(".m_fuyu_store").removeClass("active");
			$(".photo_gallery").addClass("active");
			$("#tablet_contain").addClass("active");
			changeColorBack();
        }
		else if($(".menu_contain").hasClass("active")){
            $("#left_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({marginLeft:"50%",width:"50%"},500);
			$(".menu_contain").stop().fadeOut("fast",function(){
				$(".photo_gallery").fadeIn("fast");
				$("#tablet_contain").fadeIn("fast");	
			});
			$(".menu_contain").removeClass("active");
			$(".m_menu_contain").removeClass("active");
			$(".photo_gallery").addClass("active");
			$("#tablet_contain").addClass("active");
			changeColorBack();
		}
		else if($(".hours_location").hasClass("active")){
			$(".hours_location").stop().fadeOut("fast",function(){
				$(".photo_gallery").fadeIn("fast");
				$("#tablet_contain").fadeIn("fast");	
			});
			$(".hours_location").removeClass("active");
			$(".m_hours_location").removeClass("active");
			$(".photo_gallery").addClass("active");
			$("#tablet_contain").addClass("active");
			changeColorBack();
		}
    });

	$(".nav_about").on("click",function(){
		if($(".photo_gallery").hasClass("active")){
			$(".photo_gallery").stop().fadeOut("fast",function(){
				$(".fuyu_store").fadeIn("fast");
				$(".m_fuyu_store").fadeIn("fast");
			});
			$(".photo_gallery").removeClass("active");
			$("#tablet_contain").removeClass("active");
			$(".fuyu_store").addClass("active");
			$(".m_fuyu_store").addClass("active");
			changeColor();
		}
		else if($(".menu_contain").hasClass("active")){
            $("#left_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({marginLeft:"50%",width:"50%"},500);
			$(".menu_contain").stop().fadeOut("fast",function(){
				$(".fuyu_store").fadeIn("fast");
				$(".m_fuyu_store").fadeIn("fast");	
			});
			$(".menu_contain").removeClass("active");
			$(".m_menu_contain").removeClass("active");
			$(".fuyu_store").addClass("active");
			$(".m_fuyu_store").addClass("active");
			changeColor();
		}
		else if($(".hours_location").hasClass("active")){
			$(".hours_location").stop().fadeOut("fast",function(){
				$(".fuyu_store").fadeIn("fast");
				$(".m_fuyu_store").fadeIn("fast");	
			});
			$(".hours_location").removeClass("active");
			$(".m_hours_location").removeClass("active");
			$(".fuyu_store").addClass("active");
			$(".m_fuyu_store").addClass("active");
			changeColor();
		}
    });

	$(".nav_menu").on("click",function(){
		if($(".fuyu_store").hasClass("active")){
			$(".fuyu_store").stop().fadeOut("fast",function(){
				$(".menu_contain").fadeIn("fast");
				$(".m_menu_contain").fadeIn("fast");
			});
			$(".fuyu_store").removeClass("active");
			$(".m_fuyu_store").removeClass("active");
			$(".menu_contain").addClass("active");
			$(".m_menu_contain").addClass("active");
			changeColor();
		}
		else if($(".photo_gallery").hasClass("active")){
			$(".photo_gallery").stop().fadeOut("fast",function(){
				$(".menu_contain").fadeIn("fast");
				$(".m_menu_contain").fadeIn("fast");
			});
			$(".photo_gallery").removeClass("active");
			$("#tablet_contain").removeClass("active");
			$(".menu_contain").addClass("active");
			$(".m_menu_contain").addClass("active");
			changeColor();
		}
		else if($(".hours_location").hasClass("active")){
			$(".hours_location").stop().fadeOut("fast",function(){
				$(".menu_contain").fadeIn("fast");
				$(".m_menu_contain").fadeIn("fast");
			});
			$(".hours_location").removeClass("active");
			$(".m_hours_location").removeClass("active");
			$(".menu_contain").addClass("active");
			$(".m_menu_contain").addClass("active");
			changeColor();
		}
	});
	
	$(".nav_hours").on("click",function(){
		if($(".fuyu_store").hasClass("active")){
			$(".fuyu_store").stop().fadeOut("fast",function(){
				$(".hours_location").fadeIn("fast");
				$(".m_hours_location").fadeIn("fast");
			});
			$(".fuyu_store").removeClass("active");
			$(".m_fuyu_store").removeClass("active");
			$(".hours_location").addClass("active");
			$(".m_hours_location").addClass("active");
			changeColor();
		}
		else if($(".photo_gallery").hasClass("active")){
			$(".photo_gallery").stop().fadeOut("fast",function(){
				$(".hours_location").fadeIn("fast");
				$(".m_hours_location").fadeIn("fast");	
			});
			$(".photo_gallery").removeClass("active");
			$("#tablet_contain").removeClass("active");
			$(".hours_location").addClass("active");
			$(".m_hours_location").addClass("active");
			changeColor();
		}
		else if($(".menu_contain").hasClass("active")){
            $("#left_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({marginLeft:"50%",width:"50%"},500);
			$(".menu_contain").stop().fadeOut("fast",function(){
				$(".hours_location").fadeIn("fast");
				$(".m_hours_location").fadeIn("fast");		
			});
			$(".menu_contain").removeClass("active");
			$(".m_menu_contain").removeClass("active");
			$(".hours_location").addClass("active");
			$(".m_hours_location").addClass("active");
			changeColor();
		}

    });

	
/**TABLET */

	$(".burger_button").on("click",function(){
		$(".mobile_nav").stop().slideDown();
	});

	$(".close_button").on("click",function(){
		$(".mobile_nav").stop().slideUp();
	});

	$(".m_nav_home").on("click",function(){
		$(".mobile_nav").stop().slideUp();
		$(".black_button").stop().fadeOut();
	});

	$(".m_nav_about").on("click",function(){
		$(".mobile_nav").stop().slideUp();
		$(".black_button").stop().fadeIn();
	});

	$(".m_nav_hours").on("click",function(){
		$(".mobile_nav").stop().slideUp();
		$(".black_button").stop().fadeIn();
	});

	$(".m_nav_menu").on("click",function(){
		$(".mobile_nav").stop().slideUp();
		$(".black_button").stop().fadeIn();
	});

	$(".m_nav_home").on("click",function(){
		if($(".m_fuyu_store").hasClass("active")){
			$(".m_fuyu_store").stop().fadeOut("fast",function(){
				$("#tablet_contain").fadeIn("fast");
				$(".photo_gallery").fadeIn("fast");
			});
			$(".m_fuyu_store").removeClass("active");
			$(".fuyu_store").removeClass("active");
			$("#tablet_contain").addClass("active");
			$(".photo_gallery").addClass("active");
		}
		else if($(".m_menu_contain").hasClass("active")){
			$(".m_menu_contain").stop().fadeOut("fast",function(){
				$("#tablet_contain").fadeIn("fast");
				$(".photo_gallery").fadeIn("fast");	
			});
			$(".m_menu_contain").removeClass("active");
			$(".menu_contain").removeClass("active");
			$("#tablet_contain").addClass("active");
			$(".photo_gallery").addClass("active");
		}
		else if($(".m_hours_location").hasClass("active")){
			$(".m_hours_location").stop().fadeOut("fast",function(){
				$("#tablet_contain").fadeIn("fast");
				$(".photo_gallery").fadeIn("fast");		
			});
			$(".m_hours_location").removeClass("active");
			$(".hours_location").removeClass("active");
			$("#tablet_contain").addClass("active");
			$(".photo_gallery").addClass("active");
		}
	});
	
	$(".m_nav_about").on("click",function(){
		if($("#tablet_contain").hasClass("active")){
			$("#tablet_contain").stop().fadeOut("fast",function(){
				$(".m_fuyu_store").fadeIn("fast");
				$(".fuyu_store").fadeIn("fast");
			});
			$("#tablet_contain").removeClass("active");
			$(".photo_gallery").removeClass("active");
			$(".m_fuyu_store").addClass("active");
			$(".fuyu_store").addClass("active");
		}
		else if($(".m_menu_contain").hasClass("active")){
			$(".m_menu_contain").stop().fadeOut("fast",function(){
				$(".m_fuyu_store").fadeIn("fast");
				$(".fuyu_store").fadeIn("fast");	
			});
			$(".m_menu_contain").removeClass("active");
			$(".menu_contain").removeClass("active");
			$(".m_fuyu_store").addClass("active");
			$(".fuyu_store").addClass("active");
		}
		else if($(".m_hours_location").hasClass("active")){
			$(".m_hours_location").stop().fadeOut("fast",function(){
				$(".m_fuyu_store").fadeIn("fast");
				$(".fuyu_store").fadeIn("fast");
			});
			$(".m_hours_location").removeClass("active");
			$(".hours_location").removeClass("active");
			$(".m_fuyu_store").addClass("active");
			$(".fuyu_store").addClass("active");
		}
	});
	
	$(".m_nav_menu").on("click",function(){
		if($("#tablet_contain").hasClass("active")){
			$("#tablet_contain").stop().fadeOut("fast",function(){
				$(".m_menu_contain").fadeIn("fast");
				$(".menu_contain").fadeIn("fast");
			});
			$("#tablet_contain").removeClass("active");
			$(".photo_gallery").removeClass("active");
			$(".m_menu_contain").addClass("active");
			$(".menu_contain").addClass("active");
		}
		else if($(".m_fuyu_store").hasClass("active")){
			$(".m_fuyu_store").stop().fadeOut("fast",function(){
				$(".m_menu_contain").fadeIn("fast");
				$(".menu_contain").fadeIn("fast");	
			});
			$(".m_fuyu_store").removeClass("active");
			$(".fuyu_store").removeClass("active");
			$(".m_menu_contain").addClass("active");
			$(".menu_contain").addClass("active");
		}
		else if($(".m_hours_location").hasClass("active")){
			$(".m_hours_location").stop().fadeOut("fast",function(){
				$(".m_menu_contain").fadeIn("fast");
				$(".menu_contain").fadeIn("fast");	
			});
			$(".m_hours_location").removeClass("active");
			$(".hours_location").removeClass("active");
			$(".m_menu_contain").addClass("active");
			$(".menu_contain").addClass("active");
		}
	});

	$(".m_nav_hours").on("click",function(){
		if($("#tablet_contain").hasClass("active")){
			$("#tablet_contain").stop().fadeOut("fast",function(){
				$(".m_hours_location").fadeIn("fast");
				$(".hours_location").fadeIn("fast");
			});
			$("#tablet_contain").removeClass("active");
			$(".photo_gallery").removeClass("active");
			$(".m_hours_location").addClass("active");
			$(".hours_location").addClass("active");
		}
		else if($(".m_fuyu_store").hasClass("active")){
			$(".m_fuyu_store").stop().fadeOut("fast",function(){
				$(".m_hours_location").fadeIn("fast");
				$(".hours_location").fadeIn("fast");		
			});
			$(".m_fuyu_store").removeClass("active");
			$(".fuyu_store").removeClass("active");
			$(".m_hours_location").addClass("active");
			$(".hours_location").addClass("active");
		}
		else if($(".m_menu_contain").hasClass("active")){
			$(".m_menu_contain").stop().fadeOut("fast",function(){
				$(".m_hours_location").fadeIn("fast");
				$(".hours_location").fadeIn("fast");	
			});
			$(".m_menu_contain").removeClass("active");
			$(".menu_contain").removeClass("active");
			$(".m_hours_location").addClass("active");
			$(".hours_location").addClass("active");
		}
	});


});
function changeColor(){
		$(".single_bar").css('background','black');
}

function changeColorBack(){
	$(".single_bar").css('background', 'white');
}

$(".nav_menu").on("click",function(){
	$("#left_contain").stop().animate({width:"25%"},500);
	$("#right_contain").stop().animate({width:"75%"},500);
	$("#right_contain").stop().animate({marginLeft:"25%",width:"75%"},500);
});

$(window).resize(function() {
	var width = $(window).width();
		if (width <= 768) {
			if($(".fuyu_store").hasClass("active") || $(".menu_contain").hasClass("active") || $(".hours_location").hasClass("active")){
			$("#right_contain").stop().animate({marginLeft:"0%",width:"100%"},500);
			$("#left_contain").fadeOut("fast");
		}
		else if($(".photo_gallery").hasClass("active")){
			$("#left_contain").stop().animate({width:"100%"},500);
		// $("#right_contain").stop().hide();
		}
	}
	else if (width > 768){
		if($(".menu_contain").hasClass("active")){
			$("#right_contain").stop().animate({marginLeft:"25%",width:"75%"},500);
			$("#left_contain").fadeIn("fast");
		}
		else if ($(".fuyu_store").hasClass("active") || $(".hours_location").hasClass("active")){
			$("#left_contain").fadeIn("fast");
			$("#right_contain").stop().animate({marginLeft:"50%",width:"50%"},500);
		}
		else if ($(".photo_gallery").hasClass("active")){
			$("#left_contain").stop().animate({width:"50%"},500,function(){
				$("#right_contain").stop().fadeIn(500);
				$("#right_contain").stop().animate({marginLeft:"50%",width:"50%"},500)
			});
		}
	}
});	