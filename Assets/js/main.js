$(document).ready(function(){
	if ($('.slickSlider').length) {
      $('.slickSlider').slick({
		  dots: true,
		  zIndex: 9,
		  prevArrow: '#mainSliderHolder .prevArrow',
		  nextArrow: '#mainSliderHolder .nextArrow',
		  autoplay: true,
		  autoplaySpeed: 10000,
		  lazyLoad: 'progressive',
		  respondTo: 'min'
	  });
	}
});