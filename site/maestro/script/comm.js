$(function () {
	$('.menu_depth1>li').mouseover(function () {
		$(this).children('.menu_depth2').stop().slideDown();
	})
	$('.menu_depth1>li').mouseleave(function () {
		$(this).children('.menu_depth2').stop().slideUp();
	})


	var num = 0;
	$('.mainslide li').eq(num).children('.big').fadeIn('fast');
	$('.mainslide li').eq(num).children('.small').fadeTo("slow", 1);


	setInterval(function () {
		$('.mainslide li').eq(num).children('.big').fadeOut('fast');
		$('.mainslide li').eq(num).children('.small').fadeTo("slow", 0.5);



		if (num == 3) {
			num = 0;
			$('.mainslide li').eq(num).children('.big').fadeIn('fast');
			$('.mainslide li').eq(num).children('.small').fadeTo("slow", 1);
		} else {
			num++; //num = num + 1;
			$('.mainslide li').eq(num).children('.big').fadeIn('fast');
			$('.mainslide li').eq(num).children('.small').fadeTo("slow", 1);
		}
	}, 2000);
})

$('.col3 a').click(function () {
	$('#modal').addClass('on');
});
$('#modal button').click(function () {
	$('#modal').removeClass('on');
});

$('a').focusin(function () {
	$(this).css('color', '#f00');
})
$('a').fadeOut(function () {
	$(this).css('color', 'inherit');
});
