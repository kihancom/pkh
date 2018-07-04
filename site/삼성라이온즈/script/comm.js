$(function () {
	$('.menu_depth1>li').mouseover(function () {
		$(this).children('.menu_depth2').stop().slideDown();
	})
	$('.menu_depth1>li').mouseleave(function () {
		$(this).children('.menu_depth2').stop().slideUp();
	})

	var now = 0;

	$('.mainslide li').eq(now).fadeIn();
	setInterval(function () {
		if (now < 3) {
			$('.mainslide li').eq(now).fadeOut();
			now++;
		} else {
			$('.mainslide li').eq(now).fadeOut();
			now = 0;
		}
		$('.mainslide li').eq(now).fadeIn();
	}, 2000);

})
