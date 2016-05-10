new WOW().init();

var buttonCheck = function() {
	if ($('.toggle-nav').css('display') === 'none') {
		console.log($('.toggle-nav').css('display'))
		$('.nav-list').css('display', 'flex');
	} else {
		$('.nav-list').css('display','none');
	}
};

buttonCheck();

$(window).resize(buttonCheck);

$('.toggle-nav').click(function ()  {
    $('.nav-list').slideToggle();
})
$('.nav a').click(function() {
	if ($('.toggle-nav').css('display') !== 'none') {
		$('.nav-list').slideToggle();
	}
})
