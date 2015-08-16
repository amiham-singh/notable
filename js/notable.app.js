(function(){

	var tooltip_height,tooltip_width, x, buffery = 10,bufferx = 25;

	$(document).on('mouseover','.notable_highlight', function() { 

		x = $(this).attr('data-which');
		$('.notable_block[data-which='+x+']').addClass('active');
		tooltip_height = $('.notable_block[data-which='+x+']').height();
		tooltip_width = $('.notable_block[data-which='+x+']').width();
	});

	$(document).on('mousemove','.notable_highlight', function(e) {
		var pos = $(this).position()
		var highlight_height = $(this).height()
		var highlight_width = $(this).width()

		if ((pos.left-highlight_width/2)<0){
			$('.notable_block[data-which='+x+']').css({
		        top: pos.top+(highlight_height/2)-(tooltip_height/2) ,
		        left: pos.left+highlight_width+bufferx ,
		        position: 'absolute'
		    });
		} else {
		$('.notable_block[data-which='+x+']').css({
		        top: pos.top+highlight_height+buffery,
		        left: pos.left+(highlight_height/2)-(tooltip_width/2),
		        position: 'absolute'
		    });
		}
	});

	$(document).on('mouseout','.notable_highlight', function() { 
		var e = $(this).attr('data-which');
		$('.notable_block[data-which='+e+']').removeClass('active');
	});

}).call(this);