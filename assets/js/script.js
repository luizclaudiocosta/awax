//var $j = jQuery.noConflict();

$(function(){

	var slideitens = 3;
	var slideatual = 3;
	var slideindex = 0;
	var timer = setInterval(slide,2000);
	var timerhc = setInterval(hc, 5000);


	function slide(){

		if(slideatual < slideitens) {
			slideatual = slideatual + 1;
		} else {
			slideatual = 1;
		}

		slideindex = slideatual - 1;
		slideindexant = slideindex - 1;
		if(slideindexant < 0) { slideindexant = slideitens -1; }

		//$('.slider .slide').eq(slideindex).hide();
		$('.banner .slider').css('margin-left', slideindex * -100 + 'vw');
		//$('.slider .slide').eq(slideindex).fadeIn('fast');
		$('.banner .slider-pointers .pointer').eq(slideindexant).removeClass('active');
		$('.banner .slider-pointers .pointer').eq(slideindex).addClass('active');

	}







	var hcqtd = $('.section-happyclients .hc-slide').length;
	var hcini = 0;
	var hcmax = hcqtd - 1;
	var hcatual = 0;

	$('.section-happyclients .hc-slide').eq(hcatual).fadeIn();
	$('.section-happyclients .pointer').eq(hcatual).addClass('active');

	function hc(){

		$('.section-happyclients .pointer').eq(hcatual).removeClass('active');
		$('.section-happyclients .hc-slide').eq(hcatual).hide();


		hcatual = hcatual + 1;
		if(hcatual > $('.section-happyclients .hc-slide').length - 1) { hcatual = 0; }

		$('.section-happyclients .hc-slide').eq(hcatual).fadeIn();
		$('.section-happyclients .pointer').eq(hcatual).addClass('active');

	}



});
