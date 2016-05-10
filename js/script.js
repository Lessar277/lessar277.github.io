new WOW().init();

$(window).resize(function () {
	if ($('.toggle-nav').css('display') === 'none') {
		$('.nav-list').css('display', 'flex');
	} else {
		$('.nav-list').css('display','none');
	}
})

$('.toggle-nav, .nav a').click(function ()  {
    $('.nav-list').slideToggle();
})
