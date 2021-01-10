(function($){
$(document).ready(function() {		
	jQuery(document).ready(function() {
	   var example = $('#main-nav').superfish({
		//add options here if required
	   });	
		
	   jQuery('.tp-banner').revolution(
		{
			dottedOverlay:"none",
			delay:7000,
			startwidth:695,
			startheight:560,
			hideThumbs:200,

			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,

			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"preview4",

			touchenabled:"on",
			onHoverStop:"off",
			nextSlideOnWindowFocus:"off",

			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			drag_block_vertical: false,

			keyboardNavigation:"off",

			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,

			shadow:0,
			fullWidth:"on",
			fullScreen:"on",

			spinner:"spinner0",

			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,

			shuffle:"off",

			autoHeight:"off",
			forceFullWidth:"off",

			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,

			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,			
			fullScreenOffsetContainer: ""		
		});
		
		//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
		$('.faq-question').click(function() {
			//REMOVE THE ON CLASS FROM ALL BUTTONS
			$('.single-faq').removeClass('open');	
			$('.faq-question').removeClass('faqActive');			
			//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
			$('.faq-answer').slideUp('normal');  
			 
			//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
			if($(this).next().is(':hidden') == true) {			
				//ADD THE ON CLASS TO THE BUTTON
				$(this).addClass('faqActive');
				$(this).parent().addClass('open');					  
				//OPEN THE SLIDE
				$(this).next().slideDown('normal');
			 } 		  
		 });	
		$('.faq-answer').hide();
	});		
		
	$("#headerAnimate").waypoint(function (g) {
		if (g == "down") {
			$('#header .wrapper').animate({paddingTop: "2px", paddingBottom:"2px"});
		} else {
			$('#header .wrapper').animate({paddingTop: "25px", paddingBottom:"22px"});
		}
	});
	
});
})(jQuery);