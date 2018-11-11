$(document).ready(function(){
	$(".work_title").hide();

	// $(".work1").on("mouseover", function(){
	// 	$(".work1 .work_title").fadeIn();
	// })
	// $(".work1").on("mouseout", function(){
	// 	$(".work1 .work_title").fadeOut();
	// })
	$(".work1").hover(function(){
		$(".work1 .work_title").fadeToggle();
		$(".work1 .work_descript").fadeToggle();
	});
	$(".work2").hover(function(){
		$(".work2 .work_title").fadeToggle();
		$(".work2 .work_descript").fadeToggle();
	});
	$(".work3").hover(function(){
		$(".work3 .work_title").fadeToggle();
		$(".work3 .work_descript").fadeToggle();
	});
	$(".work4").hover(function(){
		$(".work4 .work_title").fadeToggle();
		$(".work4 .work_descript").fadeToggle();
	});
});