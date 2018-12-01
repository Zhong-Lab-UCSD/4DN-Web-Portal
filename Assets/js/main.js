$(document).ready(function(){
	if ($('.slickSlider').length) {
		$('.slickSlider').each(function (i) {
			var prevArrow = $(this).parent().children('.prevArrow').length
				? $(this).parent().children('.prevArrow')
				: ($(this).parent().parent().children('.prevArrow').length
					? $(this).parent().parent().children('.prevArrow')
					: undefined);
			var nextArrow = $(this).parent().children('.nextArrow').length
				? $(this).parent().children('.nextArrow')
				: ($(this).parent().parent().children('.nextArrow').length
					? $(this).parent().parent().children('.nextArrow')
					: undefined);
			$(this).slick({
				dots: true,
				zIndex: 9,
				prevArrow: prevArrow,
				nextArrow: nextArrow,
				autoplay: true,
				autoplaySpeed: 10000,
				lazyLoad: 'progressive',
				respondTo: 'min',
				variableWidth: false
			});
			$(this).removeClass('unresolved');
		});
	}
});