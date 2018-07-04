$(function(){
	$('.menu_depth1>li').mouseover(function(){
		$(this).children('.menu_depth2').stop().slideDown();
	});
	$('.menu_depth1>li').mouseleave(function(){
		$(this).children('.menu_depth2').stop().slideUp();
	});
	
	var now =1 ;
	var max =3 ;
	var width = 1100 ;
	
	var slide=setInterval(function(){
		if(now<max){
			 $('.mainslide>ul').animate({
				 
			 })
			 }else{
			 
			 }
	})
	
	$('a').focusin(function(){
		$(this).css('color','#f00');
	});
	$('a').focusout(function(){
		$(this).css('color','inherit');
	});
})
