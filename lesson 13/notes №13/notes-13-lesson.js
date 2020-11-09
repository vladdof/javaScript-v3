// dom загружен
$(document).ready(function() {
	$('.list-item:first').hover(function() {
		$(this).toggleClass('active');
	});

	$('.list-item:eq(2)').on('click', function() {
		// четная картинка even
		$('.image:even').fadeToggle('slow');
	});

	$('.list-item:eq(4)').on('click', function() {
		// нечетная картинка odd
		$('.image:odd').animate(
		{
			opacity: 'toggle',
			height: 'toggle'
		}, 3000);
	});
});
