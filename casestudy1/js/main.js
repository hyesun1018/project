$(function(){
	let pageN=0;
	//gnb
	$("#gnb > ul > li").hover(
		function(){
			$("#header .menu").addClass("active");
		},
		function(){
			$("#header .menu").removeClass("active");
		}
	);
	$("#gnb > ul > li:first-child > a").focusin(function(){
		$("#header .menu").addClass("active");
	});
	$("#gnb li:last-child li:last-child a").focusout(function(){
		$("#header .menu").removeClass("active");
	});
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active");
	});

	//slider
	$(".slider_moving li").eq(0).addClass("active");
	$(".control li").eq(0).addClass("active");
	$(".control li").click(function(e){
		e.preventDefault();
		$(".control li").removeClass("active")
		$(this).addClass("active");
		pageN=$(this).index();
		console.log(pageN);

		$(".slider_moving li").removeClass("active");
		$(".slider_moving li").eq(pageN).addClass("active");
	});
	$(".right").click(function(e){
		e.preventDefault();
		if(pageN<3){
			pageN=pageN+1;
		}
		else{
			pageN=0;
		}
		$(".slider_moving li").removeClass("active");
		$(".slider_moving li").eq(pageN).addClass("active");
		$(".control li").removeClass("active");
		$(".control li").eq(pageN).addClass("active");
	});
	$(".left").click(function(e){
		e.preventDefault();
		if(pageN>0){
			pageN=pageN-1;
		}
		else{
			pageN=3;
		}
		$(".slider_moving li").removeClass("active");
		$(".slider_moving li").eq(pageN).addClass("active");
		$(".control li").removeClass("active");
		$(".control li").eq(pageN).addClass("active");
	});
});