$(document).ready(function(){

	// $(".nav_home").on("click",function(){
	// 	$("#tester").stop().animate({left:'0'},750);
	// });
	// $("#tester").stop().on("click",function(){
	// 	$("#tester").stop().animate({left:'100%'},750);
	// });

	// $(".nav_home").on("click",function(){
	// 	$("#tester").stop().animate({left:'0'},750);
	// });
	// $("#tester").stop().on("click",function(){
	// 	$("#tester").stop().animate({left:'100%'},750);
	// });


	$("#about_contain").fadeIn("slow");
	$("#about_contain").addClass("active");

	$(".nav_home").on("click",function(){
		if($("#work_contain").hasClass("active")){
			$("#work_contain").stop().fadeOut("fast",function(){
				$("#contact_contain").fadeOut("fast",function(){
					$("#about_contain").fadeIn("fast");
				});			
			});
			$("#work_contain").removeClass("active");
			$(".wt1").css("display","none");
			$(".wt2").css("display","none");
			$(".wt3").css("display","none");
			$(".wt4").css("display","none");
			$("#about_contain").addClass("active");
		}
		else if($("#contact_contain").hasClass("active")){
			$("#contact_contain").stop().fadeOut("fast",function(){
				$("#contact_contain").fadeOut("fast",function(){
					$("#about_contain").fadeIn("fast");
				});			
			});
			$("#contact_contain").removeClass("active");
			$("#about_contain").addClass("active");
		};
	});

	$(".nav_works").on("click",function(){
		if($("#about_contain").hasClass("active")){
			$("#about_contain").stop().fadeOut("fast",function(){
				$("#work_contain").fadeIn("fast",function(){
					$(".wt1").fadeIn(125,function(){
						$(".wt2").fadeIn(125,function(){
							$(".wt3").fadeIn(125,function(){
								$(".wt4").fadeIn(125);
							});
						});
					});
				});
			});
			$("#about_contain").removeClass("active");
			$("#work_contain").addClass("active");
		}
		else if($("#contact_contain").hasClass("active")){
			$("#contact_contain").stop().fadeOut("fast",function(){
				$("#work_contain").fadeIn("fast",function(){
					$(".wt1").fadeIn(125,function(){
						$(".wt2").fadeIn(125,function(){
							$(".wt3").fadeIn(125,function(){
								$(".wt4").fadeIn(125);
							});
						});
					});
				});
			});
			$("#about_contain").removeClass("active");
			$("#work_contain").addClass("active");
		};
	});

	$(".nav_contact").on("click",function(){
		if($("#work_contain").hasClass("active")){
			$("#about_contain").stop().fadeOut("fast",function(){
				$("#work_contain").fadeOut("fast",function(){
					$("#contact_contain").fadeIn("fast");
				});			
			});
			$("#work_contain").removeClass("active");
			$(".wt1").css("display","none");
			$(".wt2").css("display","none");
			$(".wt3").css("display","none");
			$(".wt4").css("display","none");
			$("#contact_contain").addClass("active");
		}
		else if($("#about_contain").hasClass("active")){
			$("#about_contain").stop().fadeOut("fast",function(){
				$("#work_contain").fadeOut("fast",function(){
					$("#contact_contain").fadeIn("fast");
				});			
			});
			$("#about_contain").removeClass("active");
			$("#contact_contain").addClass("active");
		};
	});

	//RUGS USA
	$(".wt1").on("click",function(){
		$(".work_tile").stop().fadeOut(function(){
			$("#work_full").stop().animate({left:'0'},750,function(){
				$(".rugsusa_contain").fadeIn();
			});
		});
	});

	$(".work_select_contain").on("click",function(){
		$(".rugsusa_contain").stop().fadeOut();
		$("#work_full").stop().animate({left:'100%'},750,function(){
			showTiles();
		});
	});


	//GUESSER
	$(".wt4").on("click",function(){
		$(".work_tile").stop().fadeOut(function(){
			$("#work_full").stop().animate({left:'0'},750,function(){
				$(".guesser_contain").fadeIn();
			});
		});
	});

	$(".work_select_contain").on("click",function(){
		$(".guesser_contain").stop().fadeOut();
		$("#work_full").stop().animate({left:'100%'},750,function(){
			showTiles();
		});
	});


	//MYSTIQ
	$(".wt3").on("click",function(){
		$(".work_tile").stop().fadeOut(function(){
			$("#work_full").stop().animate({left:'0'},750,function(){
				$(".mystiq_contain").fadeIn();
			});
		});
	});

	$(".work_select_contain").on("click",function(){
		$(".mystiq_contain").stop().fadeOut();
		$("#work_full").stop().animate({left:'100%'},750,function(){
			showTiles();
		});
	});


	// $("#tester").stop().on("click",function(){
	// 	$("#tester").stop().animate({left:'100%'},750);
	// });

	//NAV CLICK DURING WORK_FULL
	$(".nav_home").on("click",function(){
		wt1_fade();
		wt2_fade();
		wt3_fade();
		wt4_fade();
	});

	$(".nav_contact").on("click",function(){
		wt1_fade();
		wt2_fade();
		wt3_fade();
		wt4_fade();
	});

	function showTiles(){
		$("#work_contain").fadeIn("fast",function(){
			$(".wt1").fadeIn(125,function(){
				$(".wt2").fadeIn(125,function(){
					$(".wt3").fadeIn(125,function(){
						$(".wt4").fadeIn(125);
					});
				});
			});
		});
	}

	function wt1_fade(){
		$(".rugsusa_contain").stop().fadeOut();
		$("#work_full").stop().animate({left:'100%'},750);
	}

	function wt2_fade(){
		$(".fuyu_contain").stop().fadeOut();
		$("#work_full").stop().animate({left:'100%'},750);
	}

	function wt3_fade(){
		$(".mystiq_contain").stop().fadeOut();
		$("#work_full").stop().animate({left:'100%'},750);
	}

	function wt4_fade(){
		$(".guesser_contain").stop().fadeOut();
		$("#work_full").stop().animate({left:'100%'},750);
	}
});