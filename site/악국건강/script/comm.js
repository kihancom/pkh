$(function(){
	$('.menu_depth1>li').mouseover(function(){
		$(this).children('.menu_depth2').stop().slideDown();
	})
	$('.menu_depth1>li').mouseleave(function(){
		$(this).children('.menu_depth2').stop().slideUp();
	})
	
	var now =1 ;
	var max =3 ;
	var width =1000;
	
	var slide = setInterval(function(){
		if(now<max){
			 $('.mainslide>ul').animate({
				 'left':(now*width*(-1))+'px'
			 });
			now++;
			 }else{
			  $('.mainslide>ul').animate({
					'left':'0'
				});
				 now=1;
			 }
	},2000);
	
	$('.col3 a').click(function(){
		$('#modal').addClass('on');
	});
	$('#modal button').click(function(){
		$('#modal').removeClass('on');
  });

$('a').focusin(function(){
	$(this).css('color','#f00');
});
$('a').focusout(function(){
	$(this).css('color','inherit');
});
})