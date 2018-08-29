$(document).ready(function() {

	$('[href="#sheldure"], .main_btna, .main_btn').on('click', function() {
		$('.overlay').animate(
		{
			opacity: 'toggle'
		}, 2000);

		$('.modal').slideDown('slow');
	});

	$('.close').on('click', function() {
		$('.overlay').animate(
		{
			opacity: 'toggle'
		}, 2000);

		$('.modal').slideUp('slow');
	});

});